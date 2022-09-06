// import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Avatar from '@suid/material/Avatar';
import Card from '@suid/material/Card ';
import CardContent from '@suid/material/CardContent';
import Grid from '@suid/material/Grid ';
import LinearProgress from '@suid/material/LinearProgress';
import Typography from '@suid/material/Typography';
import InsertChartIcon from '@suid/icons-material/InsertChartOutlined';

const TaskProgress = (props) => {
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
            TASKS PROGRESS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            75.5%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
  )
};

export default TaskProgress;
