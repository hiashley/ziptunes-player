import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchSong } from "../utls/api";
import styles from "./SinglePlaylist.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSongSource,
  setCurrentSongIndex,
  setSongsArray,
  setCurrentSongsArray,
} from "../store/songSlice";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const SinglePlaylist = () => {
  const [loading ,setLoading] = useState(true)
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { songsArray, currentPlaylistDescription, currentPlaylistArt, currentSongTitle, currentPlaylistName } = useSelector(
    (state: any) => state.song
  );
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCurrentSongsArray = async () => {
    try {
      dispatch(setCurrentSongsArray({array: songsArray, art: currentPlaylistArt, name: currentSongTitle, description: currentPlaylistDescription, id: playlistId}));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchSongHandler = async () => {
      try {
        const playlist = await fetchSong(playlistId);
        dispatch(setSongsArray(playlist.audioFiles));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchSongHandler();
  });
  return (
    <>
    {loading && <LoadingSpinner />}
      <div className={styles.previous} onClick={handleGoBack}>
        ←
      </div>
      <div className={styles.container}>
        <div className={styles.artContainer}><img src={currentPlaylistArt} alt={currentPlaylistDescription}/>
        <h1>{currentPlaylistName}</h1>
        <div className={styles.playlistDescription}>
        {currentPlaylistDescription}
      </div>
      </div>
      <div className={styles.songs}>
        {songsArray?.length > 0 ? (
          songsArray?.map(
            ({ title, artists, album, url_AudioFile }: any, index: any) => (
              <div
                className={styles.songItem}
                key={title}
                onClick={() => {
                  dispatch(
                    setCurrentSongSource({
                      source: url_AudioFile,
                      title: title,
                    })
                  );
                  dispatch(setCurrentSongIndex(index));
                  handleCurrentSongsArray();
                }}
                data-title={title}
                data-artist={artists}
                data-source={url_AudioFile}
                data-album={album}
                data-index={index}
                tabIndex={index}
              >
                <h2>
                  <b className={styles.number}>{index + 1}</b>
                  {title} by {artists}
                </h2>
              </div>
            )
          )
        ) : (
          "No songs found."
        )}
      </div>
      </div>
    </>
  );
};

export default SinglePlaylist;
