import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface DeityCardProps {
  image: string;
  title: string;
  description: string;
}

export const DeityCard: React.FC<DeityCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <button type="submit" className="btn btn-primary btn-block">
              Pay with Razorpay
        </button>
      </CardActions>
    </Card>
  );
};


