import { Heading, LinkName, ImageWrapper, TitleImage } from "./style";
import titleBaseImg from "../../assets/images/title-base.png";

const AudioContent = () => {
  return (
    <div>
      <br />
      <a href="https://drive.google.com/" title="Google Drive Link">
        <LinkName>Google Drive Link</LinkName>
      </a>
      <Heading>Kirtan</Heading>
      <ImageWrapper>
        <TitleImage src={titleBaseImg} alt="TitleBase" />
      </ImageWrapper>
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/3ZPZj8PSYOIyJmHpEI4YLK?utm_source=generator"
        width="1100"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default AudioContent;
