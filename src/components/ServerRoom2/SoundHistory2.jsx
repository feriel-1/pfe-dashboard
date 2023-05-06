import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
    {
        date: 21.04,
        "Sound": 1.74,
      },
      {
        date: 22.04,
        "Sound": 1.93,
      },
      {
         date: 23.04,
        "Sound": 1.9,
      },
      {
        date: 24.04,
        "Sound": 1.98,
      },
      {
       date:25.04,
        "Sound": 2,
      },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export const SoundHistory2 = () => (
  <Card>
    <Title>Sound History LTN2 </Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="date"
      categories={["Sound"]}
      colors={["red"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);