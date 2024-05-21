import React from "react";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Exercise</h1>
      <p> ExerciseId : {id}</p>
    </div>
  );
};

export default ExerciseDetail;
