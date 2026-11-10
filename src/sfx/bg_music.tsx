import { useEffect, useRef } from "react";
import themeSong from "../assets/sounds/Theme_Song.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.1; 
      audioRef.current.play().catch(() => {});
    };

    const onLoad = () => {
      document.addEventListener("pointerdown", startMusic, { once: true });
    };
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("pointerdown", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={themeSong} loop preload="auto" />;
};

export default BackgroundMusic;
