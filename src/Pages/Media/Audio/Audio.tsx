import { Heading, LinkName } from "./style";

const AudioContent = () => {
  return (
    <div>
      <Heading>Google Drive </Heading>

      <a href="https://drive.google.com/" title="Google Drive Link">
        <LinkName>Google Drive Link</LinkName>
      </a>

      <br />
      <br />
      <Heading>Spotify</Heading>

      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/1KXfZjF90PK1sObXlSPxU1?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <div></div>
    </div>
  );
};

export default AudioContent;
