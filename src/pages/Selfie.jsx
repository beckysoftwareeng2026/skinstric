import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";

function Selfie() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [selfie, setSelfie] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const stopCamera = useCallback(() => {
    const currentStream = streamRef.current;

    if (currentStream) {
      currentStream.getTracks().forEach((track) => track.stop());
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    streamRef.current = null;
    setStream(null);
  }, []);

  async function startCamera() {
    try {
      setError("");
      setSelfie("");

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      streamRef.current = mediaStream;
      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error(err);
      setError("Camera access was denied or unavailable.");
    }
  }

  function takeSelfie() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || !stream) {
      setError("Please start the camera first.");
      return;
    }

    if (!video.videoWidth || !video.videoHeight) {
      setError("Camera is still loading. Please try again.");
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    if (!context) {
      setError("Unable to capture selfie.");
      return;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg");

    setSelfie(imageData);
    localStorage.setItem("skinstricSelfie", imageData);
    localStorage.setItem("skinstricImage", imageData);

    stopCamera();
  }

  async function submitSelfie() {
    if (!selfie) {
      setError("Please take a selfie first.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: selfie,
          }),
        },
      );

      const data = await response.json();

      localStorage.setItem("skinstricPhaseTwoResponse", JSON.stringify(data));

      stopCamera();
      navigate("/select");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <PageLayout className="relative">
      <Navbar subtitle="A.I. Analysis" />

      <section className="flex min-h-[70vh] items-center justify-center px-6 pb-28">
        <div className="animate-fade-slide-up flex w-full max-w-md flex-col items-center text-center">
          <p className="mb-4 text-xs uppercase text-gray-500">Camera Scan</p>

          <h1 className="text-[48px] font-[200] leading-none sm:text-[56px] md:text-6xl">
            Take a Selfie
          </h1>

          <div className="mx-auto mt-8 flex h-60 w-60 items-center justify-center overflow-hidden rounded-full border border-black bg-white transition duration-500 sm:h-72 sm:w-72">
            {selfie ? (
              <img
                src={selfie}
                alt="Selfie preview"
                className="h-full w-full animate-fade-slide-up object-cover"
              />
            ) : stream ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-500">Selfie preview</span>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden"></canvas>

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <button
              onClick={startCamera}
              className="smooth-button w-full border border-black px-6 py-3 text-xs font-bold uppercase hover:bg-black hover:text-white sm:w-auto"
            >
              Start Camera
            </button>

            <button
              onClick={takeSelfie}
              disabled={!stream}
              className="smooth-button w-full border border-black px-6 py-3 text-xs font-bold uppercase hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Take Selfie
            </button>

            <button
              onClick={submitSelfie}
              disabled={!selfie || isSubmitting}
              className="smooth-button w-full border border-black bg-black px-6 py-3 text-xs font-bold uppercase text-white hover:bg-transparent hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? "Analyzing..." : "Submit"}
            </button>
          </div>
        </div>
      </section>

      <BottomNavigation
        onBack={() => {
          stopCamera();
          navigate("/result");
        }}
        showNext={false}
      />
    </PageLayout>
  );
}

export default Selfie;
