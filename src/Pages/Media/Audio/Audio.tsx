import { Heading, LinkName, ImageDiv, TitleImage } from "./style";
import { titleBase } from "../constant";
const AudioContent = () => {
  return (
    <div>
      <Heading>Lecture</Heading>
      <ImageDiv>
        <TitleImage src={titleBase} alt="TitleBase" />
      </ImageDiv>
      <a href="https://drive.google.com/" title="Google Drive Link">
        <LinkName>Google Drive Link</LinkName>
      </a>
      <Heading>Kirtan</Heading>
      <ImageDiv>
        <TitleImage src={titleBase} alt="TitleBase" />
      </ImageDiv>
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/1KXfZjF90PK1sObXlSPxU1?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default AudioContent;
