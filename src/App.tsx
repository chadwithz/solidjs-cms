import type { Component } from "solid-js";
import Grid from "@suid/material/Grid";
import Container from "@suid/material/Container";
import Box from "@suid/material/Box";
import TotalCustomers from "./components/dashboard/total-customers";
import Budget from "./components/dashboard/budget";
import TasksProgress from "./components/dashboard/task-progress";
import TotalProfit from "./components/dashboard/total-profit";
import Sales from "./components/dashboard/sales";
import TrafficByDevice from "./components/dashboard/traffic-by-device";
import LatestProducts from "./components/dashboard/latest-product";
import LatestOrders from "./components/dashboard/latest-orders";
import { ThemeProvider } from "@suid/material/styles";
import { theme } from "./styles/theme";
import styled from '@suid/material/styles';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const App: Component = ({children,...props}) => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
