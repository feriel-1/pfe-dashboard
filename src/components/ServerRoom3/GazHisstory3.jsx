import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    date: 21.04,
    "Gaz": 1.74,
  },
  {
    date: 22.04,
    "Gaz": 1.93,
  },
  {
     date: 23.04,
    "Gaz": 1.9,
  },
  {
    date: 24.04,
    "Gaz": 1.98,
  },
  {
   date:25.04,
    "Gaz": 2,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export const GazHistory3 = () => (
  <Card>
    <Title>Gaz History3 </Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="date"
      categories={["Gaz"]}
      colors={["purple"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);