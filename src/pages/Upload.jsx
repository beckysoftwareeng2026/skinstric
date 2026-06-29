import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function Upload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setError("");
  }

  async function handleSubmit() {
    if (!image) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);

    try {
      const base64Image = await convertToBase64(image);

      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: base64Image,
          }),
        },
      );

      const data = await response.json();

      console.log("Phase Two Response:", data);

      localStorage.setItem("skinstricImage", base64Image);
      localStorage.setItem("skinstricPhaseTwoResponse", JSON.stringify(data));

      navigate("/demographics");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="animate-fade-slide-up flex items-start justify-between px-6 py-8 md:px-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase">To Start Analysis</p>
        </div>

        <button className="smooth-button border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white hover:bg-transparent hover:text-black">
          Enter Code
        </button>
      </nav>

      <section className="flex min-h-[70vh] items-center justify-center px-6 pb-28">
        <div className="animate-fade-slide-up flex w-full max-w-md flex-col items-center text-center">
          <p className="mb-4 text-xs uppercase text-gray-500">Upload Image</p>

          <h1 className="text-[48px] font-[200] leading-none sm:text-[56px] md:text-6xl">
            Upload Your Photo
          </h1>

          <label className="smooth-button mt-8 flex h-60 w-60 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black bg-white hover:bg-black hover:text-white sm:h-72 sm:w-72">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full animate-fade-slide-up object-cover"
              />
            ) : (
              <span className="px-8 text-center text-xs font-bold uppercase">
                Choose Image
              </span>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {image && (
            <p className="mt-4 max-w-[260px] truncate text-xs text-gray-500">
              {image.name}
            </p>
          )}

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="smooth-button mt-8 w-full border border-black px-6 py-3 text-xs font-bold uppercase hover:bg-black hover:text-white disabled:opacity-50 sm:w-auto"
          >
            {loading ? "Analyzing..." : "Submit Image"}
          </button>
        </div>
      </section>

      <button
        onClick={() => navigate("/result")}
        className="smooth-button absolute bottom-10 left-6 flex items-center gap-4 md:left-8"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
    </PageLayout>
  );
}

export default Upload;
