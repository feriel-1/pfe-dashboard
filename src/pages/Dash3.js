import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Temperature3  from 'src/components/ServerRoom3/Temperature3';

import Gaz3 from 'src/components/ServerRoom3/Gaz3';
import  Humidity3  from 'src/components/ServerRoom3/Humidity3';
import  Sound3  from 'src/components/ServerRoom3/Sound3';
import SoundHistory3 from 'src/components/ServerRoom3/SoundHistory3';
import  HumidityHistory3  from 'src/components/ServerRoom3/HumidityHistory3';
import  GazHistory3  from 'src/components/ServerRoom3/GazHisstory3';
import  TempHistory3 from 'src/components/ServerRoom3/TemperatureHistory3';

import { Grid } from "@tremor/react";
import {Typography} from '@mui/material';
import { database } from "src/firebase";
import { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";


const now = new Date();

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
      <title>
        LEONI
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Typography variant="h3">
              <center> Dashboard of LTN3  </center> 
              </Typography>
      <Container maxWidth="xl">
        <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">
        {data && (
              <>

          <Temperature3
            sx={{ height: '100%' }}
            value={data.Temperature}
          />

          <Humidity3
            sx={{ height: '100%' }}
            value={data.Humidity}
          />

          <Gaz3
            sx={{ height: '100%' }}
            value={data.Gaz}
          />

          < Sound3
            sx={{ height: '100%' }}
            value={data.Sound}
          />
          </>
        )}
        </Grid>
        <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
          <TempHistory3 />
          <HumidityHistory3 />
        </Grid>
        <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
          <GazHistory3 />
          <SoundHistory3 />
        </Grid>


      </Container>
    </Box>
  </>
);
    }
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;