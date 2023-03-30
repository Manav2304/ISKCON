import { Heading, LinkName, ImageDiv, TitleImage } from "./style";
import titleBaseUrl from "../../assets/images/titel-base-url.png";

const AudioContent = () => {
  return (
    <div>
      <Heading>Kirtan</Heading>
      <ImageDiv>
        <TitleImage src={titleBaseUrl} alt="TitleBase" />
      </ImageDiv>
      <a href="https://drive.google.com/" title="Google Drive Link">
        <LinkName>Google Drive Link</LinkName>
      </a>
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/1KXfZjF90PK1sObXlSPxU1?utm_source=generator"
        width="1100"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default AudioContent;
