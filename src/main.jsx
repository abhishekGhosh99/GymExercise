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
    <Route path="/GymExercise" element={<App />}>
      <Route index element={<Home />} />
      <Route path="exercise/:id" element={<ExerciseDetail />}>
        {/* <Route path=":id" element={<ExerciseDetail />} /> */}
      </Route>
      <Route />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
