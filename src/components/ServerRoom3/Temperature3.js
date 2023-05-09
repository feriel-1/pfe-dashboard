import PropTypes from 'prop-types';
import { DeviceThermostatIcon, Card, CardContent, Stack, SvgIcon, Typography,Avatar } from '@mui/material';
import { CiTempHigh } from 'react-icons/ci'


const Temperature3 = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Temperature LTN3
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
            
          </Stack>
          <Avatar
              sx={{
                backgroundColor: '#002699',
                height: 56,
                width: 56
              }}
            >
              <SvgIcon>
                <CiTempHigh />
              </SvgIcon>
            </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

Temperature3.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
export default Temperature3;