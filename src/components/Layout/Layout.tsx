import Sidebar from "../SideBar/Sidebar";
import styles from "./Layout.module.sass";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useNavigate } from "react-router";

const Layout = (props: any) => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          {props.children}</div>
      </div>
      <AudioPlayer />
    </>
  );
};

export default Layout;
