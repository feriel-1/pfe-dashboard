import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    date: 21.04,
    "Temperature": 1.74,
  },
  {
    date: 22.04,
    "Temperature": 1.93,
  },
  {
     date: 23.04,
    "Temperature": 1.9,
  },
  {
    date: 24.04,
    "Temperature": 1.98,
  },
  {
   date:25.04,
    "Temperature": 2,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

 const TempHumidityHistory2 = () => (
  <Card>
    <Title>Temperature History LTN2</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="date"
      categories={["Temperature"]}
      colors={['blue']}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);
export default TempHumidityHistory2;