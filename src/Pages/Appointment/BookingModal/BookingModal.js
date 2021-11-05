import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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

const BookingModal = ({ openBooing, handleBookingClose, booking, date }) => {
  const { name, time } = booking;
  const handleBookSubmit = (e) => {
    alert("Booking Successful");
    // collect data from form
    // send data to server
    handleBookingClose();
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
            id="outlined-size-small"
            // defaultValue="Name"
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            label="Email"
            id="outlined-size-small"
            // defaultValue={user.displayEmail}
            size="small"
          />
          <TextField
            sx={{ m: 2, width: "90%" }}
            label="Phone Number"
            id="outlined-size-small"
            // defaultValue="Phone Number"
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
          <Button sx={{ width: "90%", m: 2 }} type="submit" variant="contained">
            get Appointment
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
