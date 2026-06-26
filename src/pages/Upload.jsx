import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  async function handleFileChange(e) {
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
          <p className="mb-4 text-xs uppercase text-gray-500">Upload Image</p>

          <h1 className="text-6xl font-[200]">Upload Your Photo</h1>

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto mt-8 h-40 w-40 rounded-full object-cover"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-8"
          />

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 border border-black px-6 py-3 text-xs font-bold uppercase transition hover:bg-black hover:text-white disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Submit Image"}
          </button>
        </div>
      </section>

      <button
        onClick={() => navigate("/proceed")}
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

export default Upload;
