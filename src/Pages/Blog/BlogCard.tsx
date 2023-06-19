import { useState } from "react";
import {
  BlogImage,
  BlogInfo,
  Heading2,
  Paragraph1,
  Description,
  Button,
} from "./style";
import { Blog } from "./types";

interface BlogCardProps {
  festival: Blog;
}

export const BlogCard = ({ festival }: BlogCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <BlogImage src={festival.image} className="rounded bordered" />
      <BlogInfo>
        <Heading2>
          <h2>{festival.name}</h2>
        </Heading2>
        <Paragraph1>
          <p>{festival.authority}</p>
        </Paragraph1>
        <Description>
          {isSelected
            ? festival.description
            : `${festival.description.substring(0, 100)}...`}
        </Description>
        <Button onClick={toggleSelected}>
          {isSelected ? "Read less" : "Read more"}
        </Button>
      </BlogInfo>
    </div>
  );
};
