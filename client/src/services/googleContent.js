const API_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

export async function getGoogleContent(page) {
  if (!API_URL) {
    throw new Error(
      "L'URL Google Apps Script est manquante dans le fichier .env",
    );
  }

  const url = `${API_URL}?page=${page}&t=${Date.now()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les données Google Sheet");
  }

  return response.json();
}
