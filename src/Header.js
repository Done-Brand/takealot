import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logoImage from "./assets/Logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";
//import { pink } from '@mui/material/colors';
import CartImage from "./assets/image.png";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';

const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
  },
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#637bfe",
      main: "#333",
      dark: "#B00020",
      contrastText: "#000",
    },
  },
});

const StyledAppBar = styled(AppBar)({
  background: "white",
});

const StyledAppBar2 = styled(AppBar)({
  background: "primary",
});

const StyledAppBar3 = styled(AppBar)({
  background: "primary",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  color: "#333",
});

const handleClick = () => {
  window.location.href = "https://www.takealot.com/";
};

const handleCartClick = () => {};

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ zIndex: 1000 }}>
        <StyledAppBar position="static">
          <Toolbar>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "150px",
                marginRight: "600px",
              }}
            >
              {/*<StyledTypography variant="h6" 
        style={{ marginRight: '10px' }}>Takealot</StyledTypography>*/}

              <Button
                variant="text"
                color="inherit"
                style={{
                  marginRight: "10px",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1.5rem",
                  width: "30px",
                  marginRight: "15px",
                }}
                onClick={handleClick}
              >
                takealot
              </Button>
              <img
                src={logoImage}
                alt="Logo"
                style={{ width: "30px", height: "auto", marginRight: "10px" }}
              />
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                style={{ marginLeft: "10px" }}
              >
                <Button
                  variant="text"
                  color="secondary"
                  style={{ textTransform: "none" }}
                >
                  Help Centre
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  style={{ textTransform: "none" }}
                >
                  Sell on Takealot
                </Button>
              </Stack>
            </div>

            <div style={{ marginLeft: "50px" }}>
              <Stack spacing={1} direction="row" style={{ marginLeft: "auto" }}>
                <Button
                  variant="text"
                  color="secondary"
                  style={{ textTransform: "none" }}
                >
                  Login
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  style={{ textTransform: "none" }}
                >
                  Register
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  style={{ textTransform: "none" }}
                >
                  Orders
                </Button>
              </Stack>
            </div>

            
            <FormControl
  sx={{
    m: 1,
    minWidth: 130,
    border: "none",
    borderColor: "transparent",
    "& fieldset": {
      border: "none",
    },
  }}
  size="small"
>
  <InputLabel id="demo-select-small-label">My Account</InputLabel>
  <Select
    labelId="demo-select-small-label"
    id="demo-select-small"
    label="My Account"
    sx={{ border: "none", borderColor: "transparent" }}
  >
    <MenuItem>Track Order</MenuItem>
    <MenuItem>Returns</MenuItem>
    <MenuItem>Credit & Refunds</MenuItem>
    <MenuItem>Product Reviews</MenuItem>
    <MenuItem>Invoices</MenuItem>
    <MenuItem>Personal Details</MenuItem>
    <MenuItem>Help Centre</MenuItem>
  </Select>
</FormControl>


            

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <Fab size="small" aria-label="like" sx={{ marginRight: "20px" }}>
                <FavoriteIcon
                  sx={{
                    color: "white",
                    backgroundColor: "#ff4081",
                    borderRadius: "200%",
                    padding: "6px",
                  }}
                />
              </Fab>

              

              <IconButton aria-label="cart" size="medium"
              style={{
                backgroundColor: "#4caf50",
                
              }}>
              <img
                  src={CartImage}
                  alt="Cart"
                  width="20"
                  height="20"
                  style={{ filter: "invert(1)" }}
                />
      </IconButton>


            </div>
          </Toolbar>
        </StyledAppBar>
      </Box>

      <StyledAppBar2 position="static" sx={{ height: "100px" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "auto", marginLeft: "140px" }}>
            <FormControl
              sx={{
                m: 1,
                minWidth: 200,
                backgroundColor: "#424242",
                position: "relative",
              }}
              size="small"
            >
              <InputLabel
                id="demo-select-small-label"
                style={{ color: "white", position: "absolute" }}
              >
                Shop By Department
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#333333" },
                  "&:hover fieldset": { borderColor: "#333333" },
                  "&.Mui-focused fieldset": { borderColor: "#333333" },
                }}
              >
                <MenuItem>Electronics</MenuItem>
                <MenuItem>Books</MenuItem>
                <MenuItem>Sports</MenuItem>
                <MenuItem>Toddlers</MenuItem>
                <MenuItem>Camping</MenuItem>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Beauty</MenuItem>
                <MenuItem>Office</MenuItem>
                <MenuItem>Clothes</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <TextField
              id="search"
              label="Search for products, brands..."
              variant="outlined"
              size="small"
              onChange={(event) =>
                console.log("Search value:", event.target.value)
              }
              sx={{
                m: 1,
                width: "820px",
                backgroundColor: "white",
                borderRadius: 1,
                marginLeft: "150px",
              }}
            />
            <IconButton
              edge="start"
              aria-label="search"
              sx={{
                bgcolor: "grey",
                borderRadius: "5px",
                padding: "8px",
                "&:hover": {
                  bgcolor: "darkgrey",
                },
                "&:active": {
                  bgcolor: "lightgrey",
                },
              }}
              style={{ marginTop: "8px" }}
            >
              <SearchIcon
              style={{ color: "white" }}
              />
            </IconButton>

            <div
              style={{
                
                padding: "none",
                borderRadius: "5px",
                display: "inline-block",
                marginLeft: "150px",
                backgroundColor: "lightgrey",
              }}
            >
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                ALOT For Less
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black", 
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Winter
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Mother's Day
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "white",
                  backgroundColor: "#0288d1",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Thanksalot Sneak Peak
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Deals & Promotions
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Brands Store
              </Button>
              <Button
                variant="contained"
                color="grey"
                style={{ textTransform: "none" }}
                sx={{
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "lightgrey",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Clearance
              </Button>
            </div>
          </div>
        </Toolbar>
      </StyledAppBar2>
    </ThemeProvider>
  );
};

export default Header;
