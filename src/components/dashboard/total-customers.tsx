import type { Component } from 'solid-js';
import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import CardContent from '@suid/material/CardContent';
import Grid from '@suid/material/Grid';
import Typography from '@suid/material/Typography';
import ArrowUpwardIcon from '@suid/icons-material/ArrowUpward';
import PeopleIcon from '@suid/icons-material/PeopleOutlined';

const TotalCustomers = () => {
  return (
  <Card >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL CUSTOMERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1,6k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
};

export default TotalCustomers;
