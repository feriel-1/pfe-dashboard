import { Card, Title, Text, Grid,Metric, Flex } from "@tremor/react";
import { Button } from "@tremor/react";
import { useRouter } from 'next/router';

export const ServerRoom = (props) => {
  const router = useRouter()

  return (
    
    <main>
    <Grid numColsMd={2} className="mt-2 gap-6">
      <Card  >
      <Flex alignItems="center" justifyContent="evenly" >
        <Metric>Dashboard of LTN 1</Metric>
       
        <Button size="xl" onClick={() => router.push('/')}>
         Server room 1
        </Button>
        </Flex>
      </Card>
      <Card>
      <Flex alignItems="center" justifyContent="evenly" >
        <Metric>Dashboard of LTN 2</Metric>
        <Button size="xl" onClick={() => router.push('/Dash2')}>
        Server room 2
    </Button>
    </Flex>
      </Card>
      <Card>
      <Flex alignItems="center" justifyContent="evenly" >
      <Metric>Dashboard of LTN 3 </Metric>
        <Button size="xl" onClick={() => router.push('/Dash3')}>
        Server room 3
    </Button>
    </Flex>
      </Card>
      <Card>
      <Flex alignItems="center" justifyContent="evenly" >
      <Metric>Dashboard of LTN 4 </Metric>
        <Button size="xl" onClick={() => router.push('/Dash4')}>
        Server room 4
    </Button>
    </Flex>
      </Card>
      
    </Grid>
  </main>
);

};

