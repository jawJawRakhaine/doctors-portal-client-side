import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{ mt: 16, boxShadow: 2, borderRadius: 2 }}
          xs={12}
          md={6}
        >
          <Typography sx={{ mt: 14 }} variant="body1" gutterBottom>
            LOGIN
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              required
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              required
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">
                <Typography variant="body1">
                  Don't have an account? Register
                </Typography>
              </Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success" sx={{ width: "90%", mb: 1 }}>
                <Typography variant="body1">
                  Welcome {user.displayName}
                </Typography>
              </Alert>
            )}
            {authError && (
              <Alert severity="error" sx={{ width: "90%", mb: 1 }}>
                {authError}
              </Alert>
            )}
          </form>
          <p>--------------------------OR--------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", marginTop: "10px" }}
            src={login}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
