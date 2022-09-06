import type { Component } from 'solid-js';
import Grid from "@suid/material/Grid"
import Container from "@suid/material/Container"
import TotalCustomers from "./components/dashboard/total-customers"
import Budget from "./components/dashboard/budget"
import TasksProgress from "./components/dashboard/task-progress"
import TotalProfit from "./components/dashboard/total-profit"
import Sales from "./components/dashboard/sales"
import TrafficByDevice from "./components/dashboard/traffic-by-device"
import { ThemeProvider } from "@suid/material/styles"
import theme from "./styles/theme"

const App:Component = () => {
      return (
      <ThemeProvider theme={theme}>
       <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
        </ThemeProvider>
             );
};

export default App;
