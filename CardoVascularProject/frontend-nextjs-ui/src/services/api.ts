export async function predictCardio(data: any) {
  const response = await fetch("'https://heart-disease-api-ty27.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}

// http://127.0.0.1:5000/predict