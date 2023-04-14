import {
  HeadingStyle,
  ImageTitle,
  LinkName,
  PageWrapper,
  SpotifyWrapper,
} from "./style";
import titleBaseImg from "../../assets/images/title-base.png";

export const AudioContent = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/drive/folders/1H5-PJYvXccYmftDfIdJAKESihoX5FKYG"
        title="Google Drive Link"
        target="_blank"
      >
        <LinkName>Google Drive Link</LinkName>
      </a>
      <HeadingStyle>
        <h1>Kirtan</h1>
        <ImageTitle src={titleBaseImg} alt="Title Image" />
      </HeadingStyle>
      <PageWrapper>
        <SpotifyWrapper
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/3ZPZj8PSYOIyJmHpEI4YLK?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </PageWrapper>
    </div>
  );
};
