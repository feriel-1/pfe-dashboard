import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import {AiTwotoneSound} from 'react-icons/ai'

import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const Sound2 = (props) => {
  const { value, sx } = props;

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
              Sound sensor LTN2
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: '#3366ff',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <AiTwotoneSound />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

Sound2.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
