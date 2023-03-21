import { ImageStyle, TextStyle, HeadingStyle } from "./style";
import { history } from "./constant";
const mapHistory = history.map((paragraph) => <p>{paragraph}</p>);
export const Historypage: React.FC = () => {
  return (
    <div>
      <HeadingStyle>
        <h2>HISTORY</h2>
        <ImageStyle>
          <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
        </ImageStyle>
        <TextStyle>{mapHistory}</TextStyle>
      </HeadingStyle>
    </div>
  );
};
