import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
interface ServiceDiscriptionProps {
  title: string;
  content: string[];
  imageUrl: string;
}

export const ServiceDiscription: React.FC<ServiceDiscriptionProps> = ({
  title,
  content,
  imageUrl,
}) => {
  const mappedContent = content.map((paragraph) => <p>{paragraph}</p>);

  return (
    <div>
      <HeadingStyle>
        <h2>{title}</h2>
      </HeadingStyle>
      <Image src={titlebBaseImage} />
      <ImageStyle src={imageUrl} />
      <TextStyle>{mappedContent}</TextStyle>
    </div>
  );
};
