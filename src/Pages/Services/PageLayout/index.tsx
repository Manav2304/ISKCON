import { TextStyle, HeadingStyle, Image, ImageStyle } from "./style";
import titlebBaseImage from "../../../assets/image/title-base.png";
interface ServiceDiscriptionProps {
  title: string; 
  content: string[];
  imageUrl: string;
}

const ServiceDiscription: React.FC<ServiceDiscriptionProps> = ({
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
        <h2>{title}</h2>
        <Image src={titlebBaseImage} />
        <ImageStyle><img src={imageUrl}/> </ImageStyle>
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};

export default ServiceDiscription;