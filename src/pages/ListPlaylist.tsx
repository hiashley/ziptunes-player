import { useState, useEffect } from "react";
import { fetchPlaylist } from "../utls/api";
import styles from "./ListPlaylist.module.sass"
import LoadingSpinner from "../components/UI/LoadingSpinner";
import PlaylistItem from "../components/Playlist/PlaylistItem";

const ListPlaylist = () => {
  const [playlistArray, setPlaylistArray] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlaylist();
        setPlaylistArray(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {playlistArray?.length > 0 ? (
        playlistArray.map((playlist) => (
          <PlaylistItem {...playlist}/>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ListPlaylist;
