import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import topAddImage from "./assets/topAdd.png";
import NiveaImage from "./assets/Nivea.png";
import PnPImage from "./assets/PnP.png";
import MTNImage from "./assets/MTN.png";
import AppleImage from "./assets/Apple.png";
import SamsungImage from "./assets/Samsung.png";

const Adverts = () => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
      <Grid item xs={10} md={8} lg={6}>
        <Card>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            image={topAddImage}
            alt="Top Ad"
          />

          <Typography
            variant="h6"
            align="left"
            sx={{ marginTop: "10px", fontWeight: "bold", fontSize: "1rem" }}
          >
            Featured Brands
          </Typography>

          <Grid container spacing={2} sx={{ overflowX: "auto" }}>
            <Grid item>
              <img
                src={NiveaImage}
                alt="Nivea"
                style={{ width: "100px", height: "100px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={PnPImage}
                alt="PnP"
                style={{ width: "180px", height: "100px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={AppleImage}
                alt="Apple"
                style={{ width: "200px", height: "100px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={MTNImage}
                alt="MTN"
                style={{ width: "200px", height: "100px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={SamsungImage}
                alt="Samsung"
                style={{ width: "200px", height: "100px" }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Adverts;
