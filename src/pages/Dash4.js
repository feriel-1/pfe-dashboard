import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Temperature4 } from 'src/components/ServerRoom4/Temperature4';

import { Gaz4 } from 'src/components/ServerRoom4/Gaz4';
import { Humidity4 } from 'src/components/ServerRoom4/Humidity4';
import { Sound4 } from 'src/components/ServerRoom4/Sound4';
import { maxWidth, width } from '@mui/system';
import { SoundHistory4} from 'src/components/ServerRoom4/SoundHistory4';
import { HumidityHistory4 } from 'src/components/ServerRoom4/HumidityHistory4';
import { GazHistory4 } from 'src/components/ServerRoom4/GazHistory4';
import { TempHistory4 } from 'src/components/ServerRoom4/TemperatureHistory4';

import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react";
import {Typography} from '@mui/material';
import { database } from "src/components/Firebase/firebase";
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
              <center> Dashboard of LTN4  </center> 
              </Typography>
      <Container maxWidth="xl">
        <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">
        {data && (
              <>

          <Temperature4
            sx={{ height: '100%' }}
            value={data.Temperature}
          />

          <Humidity4
            sx={{ height: '100%' }}
            value={data.Humidity}
          />

          <Gaz4
            sx={{ height: '100%' }}
            value={data.Gaz}
          />
          < Sound4
            sx={{ height: '100%' }}
            value={data.Sound}
          />
          </>
        )}
        </Grid>
        <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
          <TempHistory4 />
          <HumidityHistory4 />
        </Grid>
        <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
          <GazHistory4 />
          <SoundHistory4 />
        </Grid>


      </Container>
    </Box>
  </>
);}
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default Page;