import React from "react";
import Header from "./Dashboard/Header";
import { Box, Stack } from "@mui/joy";
import SideBar from "./SideBar";
import Stats from "./Dashboard/Stats";
import TopText from "./Dashboard/TopText";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100dvw",
        height: "max-content",
        gap: 0,
        pt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "20%",
          height: "100dvh",
          gap: 2,
        }}
      >
        <SideBar />
      </Box>
      <Box sx={{ width: "80%" }}>
        <Header />
        <Box
          sx={{
            mt: "2vh",
            width: "98%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "max-content",
            backgroundColor: "rgba(218, 218, 218,0.7)",
            borderRadius: "1.5rem",
            backdropFilter: "blur(5px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
