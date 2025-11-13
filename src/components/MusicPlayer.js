import React, { useRef, useState, useEffect } from 'react';
import '../styles/MusicPlayer.css';
import bgMusic from '../assets/lofi.mp3'; // place your audio file here

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.25;
    
    // auto-resume if user previously allowed playback
    const allowed = localStorage.getItem('bgMusicAllowed') === 'true';
    if (allowed && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.25;

    if (!playing) {
      try {
        await audioRef.current.play();
        localStorage.setItem('bgMusicAllowed', 'true');
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="music-player" aria-hidden={false}>
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      <button className="music-toggle" onClick={toggle} aria-pressed={playing}>
        {playing ? '⏸ Pause music' : '▶ Play music'}
      </button>
    </div>
  );
}