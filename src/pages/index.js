import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewTemperature } from "src/sections/overview/overview-temperature";

import { OverviewGaz } from "src/sections/overview/overview-gaz";
import { OverviewHumidity } from "src/sections/overview/overview-humidity";
import { OverviewSound } from "src/sections/overview/overview-sound";
import { maxWidth, width } from "@mui/system";
import { SoundHistory } from "src/components/ServerRoom1/SoundHistory";
import { HumidityHistory } from "src/components/ServerRoom1/HumidityHistory";
import { GazHistory } from "src/components/ServerRoom1/GazHistory";
import { TempHumidityHistory } from "src/components/ServerRoom1/TempHumidityHistory";
import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react";
import { database } from "src/firebase/FireBase";
import { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const Page = () => {
  const [data, setData] = useState(null);

  const dbRef = ref(getDatabase());
  get(child(dbRef, `Rooms`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val().LTN1);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      <Head>
        <title>LEONI</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Typography variant="h3">
          <center> Dashboard of LTN1 </center>
        </Typography>
        <Container maxWidth="xl">
          <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">
            {data && (
              <>
                <OverviewTemperature
                  difference={12}
                  positive
                  sx={{ height: "100%" }}
                  value={data.Temperature}
                />

                <OverviewHumidity
                  difference={16}
                  positive={false}
                  sx={{ height: "100%" }}
                  value={data.Humidity}
                />

                <OverviewGaz sx={{ height: "100%" }} value={data.Gas} />

                <OverviewSound sx={{ height: "100%" }} value={data.Sound} />
              </>
            )}
          </Grid>
          <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
            <TempHumidityHistory />
            <HumidityHistory />
          </Grid>
          <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
            <GazHistory />
            <SoundHistory />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
