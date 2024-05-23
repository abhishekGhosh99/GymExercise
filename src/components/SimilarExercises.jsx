import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollbar, Loader } from "./index";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }} px="10px">
      <Typography variant="h4" mb={6} textAlign="center">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }} mb="100px">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h4" mb={6} textAlign="center">
        Exercises that uses the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }} mb="100px">
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
