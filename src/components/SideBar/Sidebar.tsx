import styles from "./Sidebar.module.sass";
import Logo from "../../assets/images/Zip_Tunes_text.svg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Sidebar = (props: any) => {
  const navigate = useNavigate();
  const {currentSideArt, currentSideName, currentSideDescription, currentSideId} = useSelector((state : any) => state.song)
  const handleNavigation = (route : string) => {
    navigate(route)
  };
  return (
    <div className={styles.sideNav}>
      <img className={styles.logo} onClick={()=> handleNavigation("/")} src={Logo} alt="" />
      <div className={styles.playlistContainer}>
        <div onClick={()=> handleNavigation("/playlist")} className={styles.playlistItem}>Playlist</div>
        <div className={styles.playlistItem}>Schedule</div>
      </div>
    <div onClick={()=> handleNavigation(`/playlist/${currentSideId}`)}className={styles.playlistArt}>
    <img src={currentSideArt ? currentSideArt : "https://images.squarespace-cdn.com/content/v1/5d2e2c5ef24531000113c2a4/1564770289250-9FPM7TAI5O56U9JQTPVO/album-placeholder.png?format=1000w"} alt={currentSideDescription} />
    </div>
    </div>
  );
};

export default Sidebar;
