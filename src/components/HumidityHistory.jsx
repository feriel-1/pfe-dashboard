import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
    {
        date: 21.04,
        "Humidity": 1.74,
      },
      {
        date: 22.04,
        "Humidity": 1.93,
      },
      {
         date: 23.04,
        "Humidity": 1.9,
      },
      {
        date: 24.04,
        "Humidity": 1.98,
      },
      {
       date:25.04,
        "Humidity": 2,
      },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export const HumidityHistory = () => (
  <Card>
    <Title> Humidity History </Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="date"
      categories={["Humidity"]}
      colors={["gray"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);