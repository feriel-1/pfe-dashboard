import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import { WiHumidity } from "react-icons/wi";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";

const Humidity2 = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Humidity
            </Typography>
            <Typography variant="h4">{value}%</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "#0033cc",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <WiHumidity />
            </SvgIcon>
          </Avatar>
        </Stack>
    
      </CardContent>
    </Card>
  );
};

Humidity2.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default Humidity2;
