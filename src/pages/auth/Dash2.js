import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Temperature } from 'src/components/ServerRoom2/Temp';

import { Gaz } from 'src/components/ServerRoom2/Gaz';
import { Humidity } from 'src/components/ServerRoom2/Humidity';
import { Sound } from 'src/components/ServerRoom2/Sound';
import { maxWidth, width } from '@mui/system';
import { SoundHistory2 } from 'src/components/ServerRoom2/SoundHistory2';
import { HumidityHistory2 } from 'src/components/ServerRoom2/HumidityHistory2';
import { GazHistory2 } from 'src/components/ServerRoom2/GazHistory2';
import { TempHumidityHistory2 } from 'src/components/ServerRoom2/TempHistory2';

import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react";
import {Typography} from '@mui/material';

const now = new Date();

const Page = () => (
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
              <center> Dashboard of LTN2  </center> 
              </Typography>
      <Container maxWidth="xl">
        <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">

          <Temperature
            difference={12}
            positive
            sx={{ height: '100%' }}
            value="24°C"
          />

          <Humidity
            difference={16}
            positive={false}
            sx={{ height: '100%' }}
            value="1.6%"
          />

          <Gaz
            sx={{ height: '100%' }}
            value={75.5}
          />

          < Sound
            sx={{ height: '100%' }}
            value="15%"
          />
        </Grid>
        <Grid numColsMd={2} numColsLg={2} className="gap-6 my-8">
          <TempHumidityHistory2 />
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
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;