import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useAuth from "../../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    // make an admin
    fetch("https://murmuring-ridge-39950.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Container sx={{ boxShadow: 2, borderRadius: 2, p: 5, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{ color: "info.main", fontWeight: 600, mt: 3, mb: 3 }}
          >
            MAKE AN ADMIN
          </Typography>
          <form onSubmit={handleAdminSubmit}>
            <br />
            <TextField
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ width: "50%" }}
              required
              id="outlined-required"
              label="Email"
              type="email"
              onBlur={handleOnBlur}
              placeholder="example@gmail.com"
              // defaultValue="Hello World"
              size="small"
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 5, width: "50%" }}
            >
              Make Admin
            </Button>
          </form>

          {success && (
            <Alert sx={{ mt: 2, mx: "auto" }} severity="success">
              Admin added successfully!
            </Alert>
          )}
        </Container>
      </Grid>
    </Grid>
  );
};

export default MakeAdmin;
