import { APlayer } from "aplayer-react";
import "aplayer-react/dist/index.css";


type AudioPlayerProps = {
  tracks: { name: string; artist: string; url: string; cover?: string }[];
};

export function AudioPlayer({ tracks }: AudioPlayerProps) {
  return <APlayer theme="#000FFF" audio={tracks.length ? tracks : []} />;
}
