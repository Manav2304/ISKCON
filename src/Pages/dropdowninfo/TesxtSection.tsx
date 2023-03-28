import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import TitleBase from "../../assets/images/Titel Base 16bit.png";

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
  const mappedContent = content.map((paragraph, Dropdowninfo) => (
    <p key={Dropdowninfo}>{paragraph}</p>
  ));
  return (
    <div>
      <HeadingStyle>
        <h2>{title}</h2>
        <Image src={TitleBase} />
        <ImageStyle>
          <img src={imageUrl} />
        </ImageStyle>
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};
export default TextSection;
