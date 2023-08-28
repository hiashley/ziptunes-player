import { MoonLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.sass"

const LoadingSpinner = (props : any) => {
    return (
        <div className={styles.overlay}>
            <MoonLoader color="black" loading={props?.isLoading}/>
        </div>
    )
}

export default LoadingSpinner