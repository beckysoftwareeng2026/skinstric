import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Selfie() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [selfie, setSelfie] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function startCamera() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

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

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg");
    setSelfie(imageData);
    localStorage.setItem("skinstricSelfie", imageData);
    localStorage.setItem("skinstricImage", imageData);
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  }

  async function submitSelfie() {
    if (!selfie) {
      setError("Please take a selfie first.");
      return;
    }

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
      navigate("/demographics");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="relative min-h-screen bg-[#f4f4f2] text-black">
      <nav className="flex items-start justify-between px-8 py-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase">To Start Analysis</p>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="flex h-[75vh] items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase text-gray-500">Camera Scan</p>

          <h1 className="text-6xl font-[200]">Take a Selfie</h1>

          <div className="mx-auto mt-8 h-72 w-72 overflow-hidden rounded-full border border-black bg-white">
            {selfie ? (
              <img
                src={selfie}
                alt="Selfie preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <canvas ref={canvasRef} className="hidden"></canvas>

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={startCamera}
              className="border border-black px-6 py-3 text-xs font-bold uppercase"
            >
              Start Camera
            </button>

            <button
              onClick={takeSelfie}
              className="border border-black px-6 py-3 text-xs font-bold uppercase"
            >
              Take Selfie
            </button>

            <button
              onClick={submitSelfie}
              className="border border-black bg-black px-6 py-3 text-xs font-bold uppercase text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <button
        onClick={() => {
          stopCamera();
          navigate("/result");
        }}
        className="absolute bottom-10 left-8 flex items-center gap-4"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
    </main>
  );
}

export default Selfie;
