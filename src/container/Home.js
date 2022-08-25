import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { sizing } from "@mui/system";

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//       border: "1px solid black",
//     }}
//   >
//     •
//   </Box>
// );

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, mt: 3 }}
        color="text.secondary"
        gutterBottom
      >
        Hi, I am Smeea.
      </Typography>

      <Typography variant="h5" component="div"></Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        I am a full stack developer
      </Typography>
      <Typography variant="body2">
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" sx={{ mt: 10 }}>
        Projects
      </Button>
      <Button variant="outlined" sx={{ mt: 10 }}>
        Resume
      </Button>
    </CardActions>
  </React.Fragment>
);
function Home() {
  return (
    <>
      {/* <Box
        sx={{
          backgroundImage: `url(https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
        }}
      ></Box> */}
      <Box
        sx={{
          maxWidth: "100%",
          height: 350,
          boxShadow: 2,

          display: "flex",
          P: 12,
          m: 18,
        }}
      >
        <Card variant="outlined" sx={{ width: "30%" }}>
          {card}
        </Card>

        <img src="background.avif" width="70%" />
      </Box>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },

  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

<h1>home</h1>;

export default Home;
