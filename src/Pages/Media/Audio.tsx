import { LinkName, PageWrapper, SpotifyWrapper, LinkStyle, HeadingStyle1 } from "./style";
import titleBaseImg from "../../assets/images/title-base.png";
import {  ImageTitle } from "../TitleBase/style";

export const AudioContent = () => {
  return (
    <div>
      <LinkStyle
        href="https://drive.google.com/drive/folders/1H5-PJYvXccYmftDfIdJAKESihoX5FKYG"
        title="Google Drive Link"
        target="_blank"
        rel="noreferrer"
      >
        <br/>
        <LinkName>Google Drive Link</LinkName>
        <br/>
      </LinkStyle>
      <HeadingStyle1>
        Kirtan
      </HeadingStyle1>
        <ImageTitle src={titleBaseImg} alt="Title Image" />
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
