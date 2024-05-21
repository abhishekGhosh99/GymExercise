import React from "react";
import { Navbar, Footer } from "./components";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default App;
