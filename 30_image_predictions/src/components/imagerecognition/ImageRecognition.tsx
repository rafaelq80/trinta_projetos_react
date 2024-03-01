import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { useRef, useState } from "react";

interface Predictions{
    'class': string,
    'score': number
}

const ImageRecognition = () => {
  
  const [predictions, setPredictions] = useState<Predictions[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const imageRef = useRef<any>();


  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageElement = imageRef.current;
      imageElement.src = URL.createObjectURL(file);
      setLoading(true);
      const model = await cocoSsd.load();
      const predictions = await model.detect(imageElement);
      setPredictions(predictions);
      setLoading(false);
    }
  };
return (
    <div>
      <input
        type="file"
        name="files"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded-md"
      />
      <img
        ref={imageRef}
        alt="Selected"
        className="mt-4 max-w-32 rounded-md shadow-md"
      />
      <div className="mt-4">
        {loading ? (
          <p className="mt-4">Loading...</p>
        ) : (
          <div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Prediction:</h2>
              <ul className="list-disc pl-4">
                {predictions.map((prediction, index) => (
                  <li key={index} className="mb-1">
                    {prediction.class} - Confidence:{" "}
                    {(prediction.score * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageRecognition;