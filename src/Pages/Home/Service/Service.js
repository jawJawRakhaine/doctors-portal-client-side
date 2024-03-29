import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, height: "100%" }}>
        {/* border: 0, boxShadow: 0  */}
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "15px auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ mt: 3 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
