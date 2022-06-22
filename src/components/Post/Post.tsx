import styles from './Post.module.scss';
import { ReactComponent as Follow } from './icons/follow.svg';

export const Post: React.FC = () => {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.header__section_left}>
                    <div className={styles.topic}>
                        <img className={styles.topic__icon} src="https://leonardo.osnova.io/1630220b-e511-58f6-8916-826857983f77/-/scale_crop/64x64/" alt="" />
                        <span className={styles.topic__text}>Торговля</span>
                    </div>
                    <div className={styles.creator}>Екатерина Очаковская</div>
                    <div className={styles.creationTime}>вчера</div>
                </div>
                <div className={styles.header__section_right}>
                    <button className={styles.subscribe}>
                        <Follow className={styles.subscribe__icon} />
                        <span className={styles.subscribe__text}>Подписаться</span>
                    </button>
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Без брендов: когда уйдут все обещавшие уйти модные магазины и что мы тогда будем носить</h2>
                <img className={styles.contentImage} src="" alt="" />
            </div>
            <div className={styles.footer}>
                <div className={styles.commentsCounter}>150</div>
                <div className={styles.addToBookmarks}></div>
                <div className={styles.shareBtn}></div>
                <div className={styles.rank}>9</div>
            </div>
        </div>
    )
}