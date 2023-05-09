import PropTypes from "prop-types";

import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import { GiGasStove } from "react-icons/gi";

const Gaz2 = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Gaz sensor
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "#0039e6",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <GiGasStove />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

Gaz2.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default Gaz2;
