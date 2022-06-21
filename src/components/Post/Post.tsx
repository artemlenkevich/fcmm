import styles from './Post.module.scss';

export const Post: React.FC = () => {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.topic}></div>
                <div className={styles.creator}></div>
                <div className={styles.creationTime}></div>
                <button className={styles.subscribe}></button>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}></h2>
                <img className={styles.contentImage} src="" alt="" />
            </div>
            <div className={styles.footer}>
                <div className={styles.commentsCounter}></div>
                <div className={styles.addToBookmarks}></div>
                <div className={styles.shareBtn}></div>
                <div className={styles.rank}></div>
            </div>
        </div>
    )
}