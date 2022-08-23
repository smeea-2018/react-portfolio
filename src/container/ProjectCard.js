import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const project = [
  {
    title: "Event Planning",
    description: "sss",
    imageUrl: [
      "https://m.media-amazon.com/images/M/MV5BMTBmNzU0NWMtN2EwMi00OTU0LTg5NWMtNjQzZTM4M2NmOWM5XkEyXkFqcGdeQXVyNDAzNjgzNw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    githubLink: "https://github.com/smeea-2018",
  },
  {
    title: "Event Planning2",
    description: "Generates invitation card",
    imageUrl: [
      "https://m.media-amazon.com/images/M/MV5BMTBmNzU0NWMtN2EwMi00OTU0LTg5NWMtNjQzZTM4M2NmOWM5XkEyXkFqcGdeQXVyNDAzNjgzNw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    githubLink: "https://github.com/smeea-2018",
  },
];

export default function MediaCard() {
  return project.map((x) => (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="../"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {x.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {x.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  ));
}
