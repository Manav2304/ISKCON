import { TextStyle, HeadingStyle, Image, ImageStyle } from "./style";
import titlebBaseUrl from "../../../assets/images/title-base-img.png";

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
        <Image src={titlebBaseUrl} />
        <ImageStyle src={imageUrl} />
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};
