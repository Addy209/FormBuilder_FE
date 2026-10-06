import { Box, Tooltip, Typography } from "@mui/joy";
import React from "react";

export const WeeklyChart = () => {
  const data = [
    { day: "Sun", percent: 45, value: 400 },
    { day: "Mon", percent: 70, value: 400 },
    { day: "Tue", percent: 60, value: 400 },
    { day: "Wed", percent: 55, value: 400 },
    { day: "Thu", percent: 100, value: 400 },
    { day: "Fri", percent: 100, value: 400 },
    { day: "Sat", percent: 65, value: 400 },
  ];
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "1.5rem",
        padding: 2,
        height: "25vh",
        background: "whitesmoke",
      }}
    >
      <Typography level="title-lg" variant="plain">
        Weekly Stats
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "95%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              sx={{
                height: "100%",
                width: "10%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Tooltip
                title={
                  <Box sx={{ display: "grid", placeItems: "center" }}>
                    <Box>{item.percent}%</Box>
                    <Box>{item.value} entries</Box>
                  </Box>
                }
                placement="top"
                arrow
                color="success"
                variant="soft"
              >
                <Box
                  sx={{
                    height: `${item.percent * 0.85}%`,
                    border: item.percent ? "1px solid grey" : "",
                    borderRadius: "5rem",
                    background:
                      item.percent >= 70
                        ? "rgb(19, 69, 39)"
                        : item.percent >= 50
                          ? "rgb(64, 121, 82)"
                          : "repeating-linear-gradient(135deg,rgb(153, 204, 169),rgba(153, 204, 169, 1) 3px,#ffffff 3px, #ffffff 8px);",
                    width: "100%",
                  }}
                >
                  &nbsp;
                </Box>
              </Tooltip>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography level="title-md" color="neutral">
                  {item.day}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
