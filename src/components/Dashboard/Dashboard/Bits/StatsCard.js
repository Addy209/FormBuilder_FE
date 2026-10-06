import { Box, IconButton, Stack, Typography } from "@mui/joy";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./dashboard-bits.css";
import { useNavigate } from "react-router-dom";

const StatsCard = (props) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={1}
      sx={{
        border: "1px solid whitesmoke",
        borderRadius: "2rem",
        background: props.noBg
          ? "whitesmoke"
          : "linear-gradient(45deg,rgb(19, 69, 39) 0%, rgba(76, 108, 86, 1) 100%);",
        color: "whitesmoke",
        border: "1px solid grey",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
        width={"100%"}
        pl={2}
        pt={1}
        pr={3}
      >
        <Typography
          variant="plain"
          level="title-lg"
          sx={{
            color: props.noBg ? "#060F09" : "whitesmoke",
            padding: "0 1.5rem",
          }}
        >
          <Stack direction={"row"}>
            {props.title}
            {props.blink ? (
              <>
                &nbsp;
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="live-dot"></span>
                </Box>
              </>
            ) : null}
          </Stack>
        </Typography>
        <IconButton
          onClick={() => {
            navigate(props.navigateTo, { state: { index: props.index } });
          }}
          sx={{
            borderRadius: "50%",
            backgroundColor: "#fafafa",
            scale: 0.8,
            border: "0.5px solid black",
          }}
        >
          <IoIosArrowRoundUp
            color="rgb(19, 69, 39)"
            fontSize={"1.5rem"}
            style={{ rotate: "45deg" }}
          />
        </IconButton>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems="center"
        width={"100%"}
        mt={-1}
      >
        <Typography
          variant="plain"
          sx={{
            color: props.noBg ? "#060F09" : "whitesmoke",
            fontSize: "3.5rem",
          }}
        >
          {props.count}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StatsCard;
