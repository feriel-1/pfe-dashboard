import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewTemperature } from 'src/sections/overview/overview-temperature';

import { OverviewGaz } from 'src/sections/overview/overview-gaz';
import { OverviewHumidity } from 'src/sections/overview/overview-humidity';
import { OverviewSound } from 'src/sections/overview/overview-sound';
import { maxWidth, width } from '@mui/system';
import { SoundHistory } from 'src/components/SoundHistory';
import { HumidityHistory } from 'src/components/HumidityHistory';
import { GazHistory } from 'src/components/GazHistory';
import { TempHumidityHistory } from 'src/components/TempHumidityHistory';

import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react";

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
      <Container maxWidth="xl">
        <Grid numColsMd={2} numColsLg={4} className="gap-6 my-8">

          <OverviewTemperature
            difference={12}
            positive
            sx={{ height: '100%' }}
            value="24°C"
          />

          <OverviewHumidity
            difference={16}
            positive={false}
            sx={{ height: '100%' }}
            value="1.6%"
          />

          <OverviewGaz
            sx={{ height: '100%' }}
            value={75.5}
          />

          < OverviewSound
            sx={{ height: '100%' }}
            value="15%"
          />
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

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
