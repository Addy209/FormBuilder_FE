import { Grid, Stack } from "@mui/joy";
import React from "react";
import StatsCard from "./Bits/StatsCard";

const Stats = () => {
  return (
    <>
      <Grid lg={3} md={3} sm={6} xs={12}>
        <StatsCard
          noBg={false}
          title="Published Forms"
          count={32}
          navigateTo={"/forms"}
          index={1}
        />
      </Grid>
      <Grid lg={3} md={3} sm={6} xs={12}>
        <StatsCard
          noBg={true}
          title="Active Forms"
          count={1}
          blink={true}
          navigateTo={"/forms"}
          index={1}
        />
      </Grid>
      <Grid lg={3} md={3} sm={6} xs={12}>
        <StatsCard
          noBg={true}
          title="Filled Forms"
          count={13}
          navigateTo={"/forms"}
          index={1}
        />
      </Grid>
      <Grid lg={3} md={3} sm={6} xs={12}>
        <StatsCard
          noBg={true}
          title="Filled Entries"
          count={72}
          navigateTo={"/entries"}
          index={2}
        />
      </Grid>
    </>
  );
};

export default Stats;
