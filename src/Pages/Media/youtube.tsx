import React from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
}

export const YouTubeVideo: React.FC<Props> = ({ videoId }) => {
  const opts = {
    height: "400",
    width: "1000",

    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};
