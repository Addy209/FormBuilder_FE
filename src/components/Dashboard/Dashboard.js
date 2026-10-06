import React from "react";
import Header from "./Dashboard/Header";
import { Box, Stack } from "@mui/joy";
import TopText from "./Dashboard/TopText";
import Stats from "./Dashboard/Stats";
import WeeklyStats from "./Dashboard/WeeklyStats";
import Grid from "@mui/joy/Grid";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          padding: 2,
        }}
      >
        <Grid lg={12} md={12} sm={12} xs={12}>
          <TopText />
        </Grid>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Stats />
        </Grid>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <WeeklyStats />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
