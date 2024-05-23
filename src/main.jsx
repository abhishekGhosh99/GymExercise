import "../global-shim.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home, ExerciseDetail } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="exercise/:id" element={<ExerciseDetail />} />
    </Route>
  ),
  {
    basename: "/GymExercise",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// api exhausted change the api with the new ones
// change the api in fetchData.js file
// and check the website, does it working on localhost or not and if working then check in gh-pages
// if using new api and still doesn't work then change the base url of vite.config.js and main.jsx
// otherwise deploy the project on netlify
