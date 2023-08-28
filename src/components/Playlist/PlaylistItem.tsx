import styles from "./PlaylistItem.module.sass"
import { useNavigate } from "react-router"
import { setCurrentPlaylistDescription } from "../../store/songSlice";
import { useDispatch } from "react-redux";
const PlaylistItem = (props : any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigation = (e : any) => {
        dispatch(setCurrentPlaylistDescription({name: props.title, art: props.url_Playlist_Art ? props.url_Playlist_Art : "https://images.squarespace-cdn.com/content/v1/5d2e2c5ef24531000113c2a4/1564770289250-9FPM7TAI5O56U9JQTPVO/album-placeholder.png?format=1000w", description: e.currentTarget.dataset.description}))
        navigate(`${props.id}`)
    }
    return (
        <div className={styles.playlist}>
       <div onClick={handleNavigation} data-description={props.description} className={styles.playlistItem} key={props.id}>
        <div className={styles.playlistArt}>
        <img className={styles.playlistArt} src={props.url_Playlist_Art ? props.url_Playlist_Art : "https://images.squarespace-cdn.com/content/v1/5d2e2c5ef24531000113c2a4/1564770289250-9FPM7TAI5O56U9JQTPVO/album-placeholder.png?format=1000w"} alt="" />
        </div>
       </div>
       <div className={styles.playlistInfo}>
       <p>{props.title}</p>
       <span>{props.description}</span>
       </div>
       </div>
    )
    
}
export default PlaylistItem