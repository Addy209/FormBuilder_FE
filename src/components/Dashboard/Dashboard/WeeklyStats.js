import { Box, Grid, Stack } from "@mui/joy";
import React from "react";
import { WeeklyChart } from "./Bits/WeeklyData";

const WeeklyStats = () => {
  return (
    <>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <WeeklyChart />
      </Grid>
      <Grid lg={3} md={3} sm={12} xs={12}></Grid>
      <Grid lg={3} md={3} sm={12} xs={12}></Grid>
    </>
  );
};

export default WeeklyStats;
