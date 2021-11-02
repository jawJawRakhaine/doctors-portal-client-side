import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const Services = () => {
  const services = [
    {
      name: "Fluoride Treatment",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless. Fluoride salts typically have distinctive bitter tastes, and are odorless.",
      img: fluoride,
    },
    {
      name: "Cavity Filling",
      description:
        "A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooth's hard outer layer (enamel). Anyone can get a cavity. Proper brushing, flossing and dental cleanings can prevent cavities (sometimes called dental caries)",
      img: cavity,
    },
    {
      name: "Whitening Teeth",
      description:
        "Teeth whitening isn't permanent. It can lasts up to 3 years – it varies from person to person. The whitening effect won't last as long if you smoke or drink red ...",
      img: whitening,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
