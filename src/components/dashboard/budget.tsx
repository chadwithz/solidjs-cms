import type { Component } from 'solid-js';
// import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Grid from '@suid/material/Grid';
import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import CardContent from '@suid/material/CardContent';
import Typography from '@suid/material/Typography';
import ArrowDownwardIcon from '@suid/icons-material/ArrowDownward';
import MoneyIcon from '@suid/icons-material/Money';

const Budget = (props) => {
  return(
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            BUDGET
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $24k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
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

export default Budget;
