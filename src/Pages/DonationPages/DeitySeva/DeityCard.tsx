import * as React from "react";

import CardActions from "@mui/material/CardActions";

import {
  CardContentStyle,
  CardMediaStyle,
  CardStyle,
  TypoGraphy,
  // TypoGraphy,
} from "./style";

interface DeityCardProps {
  image: string;
  title: string;
  description: string;
  maintitle: string;
}

export const DeityCard: React.FC<DeityCardProps> = ({
  image,
  title,
  description,
  maintitle,
}) => {
  return (
    <>
      <CardStyle>
        <CardMediaStyle image={image} title={title} />
        <CardContentStyle>
          <TypoGraphy>{maintitle}</TypoGraphy>
          <TypoGraphy>{title}</TypoGraphy>
          <TypoGraphy>{description}</TypoGraphy>
          <CardActions>
            <button type="submit" className="btn btn-primary btn-block">
              Donate Now
            </button>
          </CardActions>
        </CardContentStyle>
      </CardStyle>
    </>
  );
};
