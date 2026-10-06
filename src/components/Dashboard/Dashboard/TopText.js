import { Box, Button, Stack, Typography } from "@mui/joy";
import React, { useContext } from "react";
import { AppContext } from "../../../Reducer/context/store";

const TopText = () => {
  const { state } = useContext(AppContext);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Stack
        direction={"row"}
        gap={0}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{ padding: "0 1rem 0 1rem" }}
      >
        <Stack direction={"column"} gap={0.5}>
          <Typography level="h2" fontFamily={"monospace"}>
            Dashboard
          </Typography>
          <Typography level="body-xs" color="success" fontFamily={"monospace"}>
            Plan, Prioritize and Achieve your Goals
          </Typography>
        </Stack>
        {state.user.isAdmin || state.user.isDev ? (
          <Stack direction={"row"} gap={1}>
            <Button
              size="lg"
              sx={{
                borderRadius: "1.5rem",
                background:
                  "linear-gradient(45deg,rgb(19, 69, 39) 0%, rgba(76, 108, 86, 1) 100%);",
              }}
            >
              + New Form
            </Button>
            <Button
              size="lg"
              variant="outlined"
              sx={{
                borderRadius: "1.5rem",
                border: "1px solid rgb(19, 69, 39)",
                color: "rgb(19, 69, 39)",
                backgroundColor: "whitesmoke",
              }}
            >
              Load Draft
            </Button>
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default TopText;
