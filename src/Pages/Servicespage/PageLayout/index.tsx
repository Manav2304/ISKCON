import { TextStyle, HeadingStyle, Image, ImageStyle } from "./style";
import titlebBaseimage from "../../../assets/image/titlebase.png";
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
        <br />
        <h2>{title}</h2>
        <Image src={titlebBaseimage} />
        <ImageStyle><img src={imageUrl}/> </ImageStyle>
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};

export default ServiceDiscription;