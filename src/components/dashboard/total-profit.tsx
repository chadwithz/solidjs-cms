import type { Component } from 'solid-js';
import Avatar from '@suid/material/Avatar';
import Card from '@suid/material/Card';
import CardContent from '@suid/material/CardContent';
import Grid from '@suid/material/Grid';
import Typography from '@suid/material/Typography';
import AttachMoneyIcon from '@suid/icons-material/AttachMoney';

const TotalProfit = (props) => {
  return (
  <Card {...props}>
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
            TOTAL PROFIT
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $23k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
};

export default TotalProfit;
