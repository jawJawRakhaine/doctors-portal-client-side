import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const BookingModal = ({
  openBooing,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
  };
  const handleBookSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      date: date.toLocaleDateString(),
      time,
      price,
      serviceName: name,
    };
    // send booking info to server
    fetch("https://murmuring-ridge-39950.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });
    // collect data from form
    // send data to server
    e.preventDefault();
  };
  return (
    <Modal
      keepMounted
      open={openBooing}
      onClose={handleBookingClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            color: "info.main",
            fontWeight: "bold",
            textAlign: "center !important",
          }}
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
        >
          {name}
        </Typography>
        <form onSubmit={handleBookSubmit}>
          <TextField
            sx={{ m: 2, width: "90%" }}
            disabled
            label="Time"
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            label="Name"
            name="patientName"
            onBlur={handleOnBlur}
            id="outlined-size-small"
            defaultValue={user.displayName}
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            label="Email"
            name="email"
            onBlur={handleOnBlur}
            id="outlined-size-small"
            defaultValue={user.email}
            size="small"
          />
          <TextField
            required
            sx={{ m: 2, width: "90%" }}
            label="Phone Number"
            id="outlined-size-small"
            onBlur={handleOnBlur}
            name="phone"
            type="number"
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            disabled
            label="Appointment Date"
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            disabled
            label="Appointment Fees"
            id="outlined-size-small"
            defaultValue={price}
            size="small"
          />
          <Button sx={{ width: "90%", m: 2 }} type="submit" variant="contained">
            get appointment
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
