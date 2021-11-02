import React from "react";
import Grid from "@mui/material/Grid";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import { Button, Container, Typography, Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  height: 450,
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5, fontSize: 13, fontWeight: 300, color: "grey" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste{" "}
              <br />
              ratione sint necessitatibus aperiam. Veniam, dolorum! Recusandae
              odio rerum rem saepe.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "450px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
