import { Card, Metric, Flex } from "@tremor/react";
import { Button } from "@tremor/react";
import { useRouter } from "next/router";

function RoomButton() {
  const router = useRouter();
  return (
    <li>
      <Card>
        <Flex alignItems="center" justifyContent="evenly">
          <Metric>Dashboard of LTN 1</Metric>

          <Button size="xl" onClick={() => router.push("/")}>
            Server room 1
          </Button>
        </Flex>
      </Card>
    </li>
  );
}
export default RoomButton;
