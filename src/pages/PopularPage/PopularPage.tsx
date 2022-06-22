import { Post } from "../../components/Post"
import styles from "./PopularPage.module.scss";

export const PopularPage = () => {
    return (
        <div className={styles.popularPage}>
            <Post/>
        </div>
    )
}