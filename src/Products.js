import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Products = ({ products }) => {
  return (
    <Grid container srowGap={1} columnGap={0}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ maxWidth: 250, margin: 2 }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <CardMedia
                  component="img"
                  height="150"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "contain", backgroundColor: "white" }}
                />
              </Grid>
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


export default Products;
