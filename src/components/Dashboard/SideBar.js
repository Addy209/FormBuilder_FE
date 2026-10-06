import { Box, Divider, Typography } from "@mui/joy";
import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import MenuList from "./Dashboard/MenuList";

const SideDrawer = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        backgroundColor: "rgba(218, 218, 218,0.7)",
        ml: 2,
        width: "90%",
        mr: 2,
        height: "96%",
        borderRadius: "1.5rem",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Typography
          level="h2"
          textColor={"rgb(19, 69, 39)"}
          fontFamily={"monospace"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TbLayoutDashboardFilled size={32} /> ProdForms
          </Box>
        </Typography>
      </Box>
      <Box sx={{ pt: 10, pl: 2 }}>
        <Typography level="body-lg" color="neutral">
          Menu
        </Typography>
        <Box>
          <MenuList />
        </Box>
      </Box>
    </Box>
  );
};

export default SideDrawer;
