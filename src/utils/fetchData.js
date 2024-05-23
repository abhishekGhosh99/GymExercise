export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // "X-RapidAPI-Key": "fcb57865c4msh39f528976476ff9p1395f0jsne546f42d3ae6", // 1st api;
    // "X-RapidAPI-Key": "413a0b19b4mshc18f74c10e1bb3bp17b0b4jsn1276f501d851", // 2nd api
    "X-RapidAPI-Key": "cfd3a31490msh30c567ed4cb8d53p1d4cc6jsn811fcc65b937", // 3rd api
    // "X-RapidAPI-Key": import.meta.env.VITE_GYM_EXERCISE_API_KEY,
    // hide the api key in the .env file and figure out how to use that .env file here
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "cfd3a31490msh30c567ed4cb8d53p1d4cc6jsn811fcc65b937",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(`${url}?limit=1000`, options);
  // const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
