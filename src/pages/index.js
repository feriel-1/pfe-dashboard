import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Temperature } from "src/components/ServerRoom1/Temperature";

import { Gaz } from "src/components/ServerRoom1/Gaz";
import { Humidity } from "src/components/ServerRoom1/Humidity";
import { Sound } from "src/components/ServerRoom1/Sound";
import { maxWidth, width } from "@mui/system";
import { SoundHistory } from "src/components/ServerRoom1/SoundHistory";
import { HumidityHistory } from "src/components/ServerRoom1/HumidityHistory";
import { GazHistory } from "src/components/ServerRoom1/GazHistory";
import { TempHumidityHistory } from "src/components/ServerRoom1/TempHumidityHistory";
import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react";
import { database } from "src/firebase";
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
                <Temperature
                  sx={{ height: "100%" }}
                  value={data.Temperature}
                />

                <Humidity
                  sx={{ height: "100%" }}
                  value={data.Humidity}
                />

                <Gaz sx={{ height: "100%" }} value={data.Gas} />

                <Sound sx={{ height: "100%" }} value={data.Sound} />
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
Page.getLayout = (page) => 
<DashboardLayout>
    {page}
</DashboardLayout>;

export default Page;
