import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewTemperature } from 'src/sections/overview/overview-budget';
import { OverviewGazhistory } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { Overviewtemphistory } from 'src/sections/overview/Overview-temphistory';
import { OverviewGaz } from 'src/sections/overview/overview-tasks-progress';
import { OverviewHumidity } from 'src/sections/overview/overview-total-customers';
import {  OverviewSound } from 'src/sections/overview/overview-total-profit';
import { maxWidth, width } from '@mui/system';
/*import { OverviewTraffic } from 'src/sections/overview/overview-traffic';*/

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
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTemperature
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewHumidity
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewGaz
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            < OverviewSound
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <Overviewtemphistory
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            
          </Grid>
          
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewGazhistory
                  chartSeries={[
                    {
                      name: 'This year',
                      data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                    },
                    {
                      name: 'Last year',
                      data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                    }
                  ]}
                  sx={{ height: '100%' }}
            />
          </Grid>
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
