"use client";

import { useState } from "react";
import { predictCardio } from "../services/api";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      age: Number(formData.get("age")),
      gender: Number(formData.get("gender")),
      height: Number(formData.get("height")),
      weight: Number(formData.get("weight")),
      ap_hi: Number(formData.get("ap_hi")),
      ap_lo: Number(formData.get("ap_lo")),
      cholesterol: Number(formData.get("cholesterol")),
      gluc: Number(formData.get("gluc")),
      smoke: Number(formData.get("smoke")),
      alco: Number(formData.get("alco")),
      active: Number(formData.get("active")),
    };

    try {
      const response = await predictCardio(data);
      setResult(response.message);
    } catch {
      setResult("Error calling API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
          ❤️ Cardiovascular Disease Prediction
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input className="input" name="age" placeholder="Age" required />
          <input className="input" name="gender" placeholder="Gender (1/2)" required />
          <input className="input" name="height" placeholder="Height (cm)" required />
          <input className="input" name="weight" placeholder="Weight (kg)" required />
          <input className="input" name="ap_hi" placeholder="BP High" required />
          <input className="input" name="ap_lo" placeholder="BP Low" required />
          <input className="input" name="cholesterol" placeholder="Cholesterol (1/2/3)" required />
          <input className="input" name="gluc" placeholder="Glucose (1/2/3)" required />
          <input className="input" name="smoke" placeholder="Smoking (0/1)" required />
          <input className="input" name="alco" placeholder="Alcohol (0/1)" required />
          <input className="input col-span-2" name="active" placeholder="Active (0/1)" required />

          <button
            type="submit"
            className="col-span-2 bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center text-lg font-semibold">
            Result: {result}
          </div>
        )}
      </div>
    </main>
  );
}
