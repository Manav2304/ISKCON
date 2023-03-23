import { HeadIng3 ,PageWrapper} from "./style";

const AudioContent = () => {
    return (
      <div>
    
        <HeadIng3>Google Drive </HeadIng3>
        <a href="https://drive.google.com/" title="Google Drive Link">Google Drive Link</a>
        <br/><br/>
        <HeadIng3>Spotify</HeadIng3>
        
        <iframe 
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/1KXfZjF90PK1sObXlSPxU1?utm_source=generator" 
        width="100%" 
        height="352" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>
       
      <div>
        </div>  
      </div>
    );
  };

 export default AudioContent;