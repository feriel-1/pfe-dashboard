import Head from "next/head";
import { Box, Container } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Temperature2 from "src/components/ServerRoom2/Temp2";
import Gaz2 from "src/components/ServerRoom2/Gaz2";
import Humidity2 from "src/components/ServerRoom2/Humidity2";
import Sound2 from "src/components/ServerRoom2/Sound2";
import  SoundHistory2  from "src/components/ServerRoom2/SoundHistory2";
import  HumidityHistory2 from "src/components/ServerRoom2/HumidityHistory2";
import  GazHistory2  from "src/components/ServerRoom2/GazHistory2";
import TempHistory2  from "src/components/ServerRoom2/TempHistory2";

import { Grid } from "@tremor/react";
import { Typography } from "@mui/material";
import { database } from "src/firebase";
import { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const Page = () => {
  const [data, setData] = useState(null);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Rooms`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val().LTN2);
        console.log(snapshot.val());
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
          <center> Dashboard of LTN2 </center>
        </Typography>
        <Container maxWidth="xl">
          <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">
            {data && (
              <>
                <Temperature2
                  sx={{ height: "100%" }}
                  value={data.Temperature}
                />

                <Humidity2
                  sx={{ height: "100%" }}
                  value={data.Humidity}
                />

                <Gaz2 sx={{ height: "100%" }} value={data.Gaz} />
                <Sound2 sx={{ height: "100%" }} value={data.Sound} />
              </>
            )}
          </Grid>
          <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
            <TempHistory2 />
            <HumidityHistory2 />
          </Grid>
          <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
            <GazHistory2 />
            <SoundHistory2 />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
