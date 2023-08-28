import styles from "./AudioPlayer.module.sass";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSongSource, setCurrentSongIndex } from "../../store/songSlice";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  
  const { currentSongSource, currentSongIndex, currentSongTitle, songsArray, currentSongsArray } = useSelector(
    (state: any) => state.song
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && currentSongSource) {
      audioRef.current.src = currentSongSource;
      audioRef.current.play();    }
  }, [currentSongSource]);

  useEffect(() => {
    const handleSongEnd = () => {
      let nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= currentSongsArray.length) {
        nextSongIndex = 0;
      }
      const nextSong = currentSongsArray[nextSongIndex];
      dispatch(
        setCurrentSongSource({
          source: nextSong.url_AudioFile,
          title: nextSong.title,
        })
      );
      dispatch(setCurrentSongIndex(nextSongIndex));
    };
    audioRef.current?.addEventListener("ended", handleSongEnd);
    return () => {
      audioRef.current?.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSongIndex, songsArray]);

  return (
    <div className={styles.audioPlayer}>
      <audio className={styles.audio} controls ref={audioRef}></audio>
      <div className={styles.songPlaying}>
        <p className={styles.songTitle}>{currentSongTitle ? `Currently Playing: ${currentSongTitle}`: ""}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
