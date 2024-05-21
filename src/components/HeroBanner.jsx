import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner2.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "30px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#ff2625"
        fontWeight="700"
        fontSize="80px"
        lineHeight="80px"
        letterSpacing="2px"
        fontFamily="Norwester"
      >
        INFINITY
        <br />
        FITNESS CLUB
      </Typography>

      <Typography
        fontWeight="700"
        fontSize="28px"
        my="30px"
        fontFamily="Norwester"
        letterSpacing="1px"
        sx={{ fontsize: { lg: "42px", xs: "40px" } }}
      >
        Sweat, Smile and Repeat
      </Typography>

      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}
        fontFamily="Gilroy"
        fontWeight={600}
      >
        Check out the most effective exercises.
      </Typography>

      <Button
        className="btn"
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          fontFamily: "Gilroy",
          fontSize: "15px",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
      >
        Expore Exercises
      </Button>

      <Typography
        fontWeight={600}
        fontFamily="Norwester"
        // textAlign="center"
        letterSpacing="2px"
        ml="50px"
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        EXERCISE
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
