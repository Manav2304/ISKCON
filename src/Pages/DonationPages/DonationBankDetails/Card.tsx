import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import barcode from "../../../assets/images/barcode.jpeg";
import { CardWrapper } from "./style";

export const MediaCard = () => {
  return (
    <CardWrapper>
      <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 200 }} image={barcode} title="Barcode" />
          {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
          {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </div>
    </CardWrapper>
  );
};
