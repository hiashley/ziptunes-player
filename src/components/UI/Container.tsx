import styles from "./Container.module.sass";

const Container = (props: any) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
