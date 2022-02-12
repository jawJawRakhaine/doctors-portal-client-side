import { Button, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooing, setBooingOpen] = React.useState(false);
  const handleBookingOpen = () => setBooingOpen(true);
  const handleBookingClose = () => setBooingOpen(false);
  const { name, time, price, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ color: "info.main", fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Spaces Available
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Fees: {price} TAKA
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ mt: 3 }}
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        date={date}
        openBooing={openBooing}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
