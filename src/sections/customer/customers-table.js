import { Card, Title, Text, Grid, Metric, Flex } from "@tremor/react";
import { Button } from "@tremor/react";
import { useRouter } from "next/router";
import RoomButton from "./RoomButton";

export const ServerRoom = (props) => {
  const router = useRouter();

  return (
    <main>
      <Grid numColsMd={2} className="mt-2 gap-6">
        <RoomButton/>
        <RoomButton/>
        <RoomButton/>
        
      </Grid>
    </main>
  );
};
