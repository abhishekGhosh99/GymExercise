import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./index";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exerciseData);
      const searchTerm = search.toLowerCase();
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  // const handleSearch = async () => {
  //   if (search) {
  //     const searchTerm = search.toLowerCase();
  //     let exerciseData = [];

  //     if (searchTerm === "all") {
  //       exerciseData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises",
  //         exerciseOptions
  //       );
  //     } else {
  //       exerciseData = await fetchData(
  //         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm}`,
  //         // `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`,
  //         exerciseOptions
  //       );
  //     }

  //     console.log(exerciseData);
  //     window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

  //     setSearch("");
  //     setExercises(exerciseData);
  //   }
  // };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search..."
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              fontFamily: "Gilroy",
              border: "none",
              borderRadius: "10px",
              outline: "none",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: "#ff2625",
            color: "#fff",
            textTranform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "18px", xs: "14px" },
            fontWeight: "600",
            height: "56px",
            position: "absolute",
            right: "0",
            fontFamily: "Gilroy",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
