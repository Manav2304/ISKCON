import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import Titlebase from "../../assets/images/Titel Base 16bit.png";

interface TextSectionProps {
  title: string;
  content: string[];
  imageUrl: string;
}
const TextSection: React.FC<TextSectionProps> = ({
  title,
  content,
  imageUrl,
}) => {
  const mappedContent = content.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));
  return (
    <div>
      <HeadingStyle>
        <br />
        <h2>{title}</h2>
        <Image src={Titlebase} />
        <ImageStyle>
          <img src={imageUrl} />
        </ImageStyle>
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};
export default TextSection;
