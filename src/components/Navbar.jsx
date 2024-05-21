import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "200px", xs: "40px" },
        mt: { sm: "10px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "110px", height: "110px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="flex-start"
        mt="26px"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#fff" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
