import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";

const Footer = () => {
  return (
    <Box mt="100px" backgroundColor="#262626">
      <Stack alignItems="center" px="40px" pb="24px">
        <img src={Logo} alt="logo" width="200px" height="200px" />
      </Stack>
      <Stack direction="row" width="100%" gap="30px">
        <Typography width="33.33%" px="50px">
          <Typography variant="h5" pb="40px">
            Categories
          </Typography>
          <Typography variant="h6" pb="40px">
            <FaDumbbell />
            <span style={{ padding: "0 20px" }}>Strengh Training</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <GiMuscleUp />
            <span style={{ padding: "0 20px" }}>Body Building</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <GiWeightLiftingUp />
            <span style={{ padding: "0 20px" }}>Weight Loss</span>
          </Typography>
        </Typography>

        <Typography width="33.33%" px="50px">
          <Typography variant="h5" pb="40px">
            Contact Us
          </Typography>
          <Typography variant="h6" pb="40px">
            <IoCall />
            <span style={{ padding: "0 20px" }}>+01 2345 6789</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <MdEmail />
            <span style={{ padding: "0 20px" }}>xyz@example.com</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <IoLocationSharp />
            <span style={{ padding: "0 20px" }}> xyz street, abcd 987654</span>
          </Typography>
        </Typography>

        <Typography width="33.33%" px="50px">
          <Typography variant="h5" pb="40px">
            Links
          </Typography>
          <Typography variant="h6" pb="40px">
            <FaFacebookSquare />
            <span style={{ padding: "0 20px" }}> Facebook</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <FaInstagramSquare />
            <span style={{ padding: "0 20px" }}> Instagram</span>
          </Typography>
          <Typography variant="h6" pb="40px">
            <FaTwitterSquare />
            <span style={{ padding: "0 20px" }}> Twitter</span>
          </Typography>
        </Typography>
      </Stack>
      <hr />
      <Stack alignItems="center" px="40px" pt="24px">
        <Typography variant="p" pb="40px">
          ©2024 InfinityFitness. All Copyrights Reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
