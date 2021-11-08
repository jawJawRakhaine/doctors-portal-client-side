import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Typography paragraph>
      <Grid container spacing={3}>
        <Grid
          sx={{ boxShadow: 2, borderRadius: 2, mt: 5, ml: 2 }}
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
        >
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid sx={{ mt: 5 }} item xs={12} sm={12} md={8} lg={8}>
          <Appointments date={date} />
        </Grid>
      </Grid>
    </Typography>
  );
};

export default DashboardHome;
