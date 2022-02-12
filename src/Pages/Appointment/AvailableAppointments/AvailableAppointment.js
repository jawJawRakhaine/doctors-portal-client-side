import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "08:00 AM - 09.00 AM",
    price: 700,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09:00 AM - 10.00 AM",
    price: 600,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10:00 AM - 11.00 AM",
    price: 820,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11:00 AM - 12.00 AM",
    price: 1000,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06:00 PM - 07.00 PM",
    price: 3000,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07:00 AM - 08.00 AM",
    price: 1200,
    space: 10,
  },
];
const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography
        variant="h4"
        sx={{ color: "info.main", fontWeight: 600, mt: 5, mb: 5 }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert
          severity="success"
          sx={{
            mb: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Booking Successful
        </Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
