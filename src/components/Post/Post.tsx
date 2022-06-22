import styles from './Post.module.scss';
import { ReactComponent as FollowIcon } from './icons/follow.svg';
import { ReactComponent as CommentsIcon } from './icons/comments.svg';
import { ReactComponent as BookmarkIcon } from './icons/bookmark.svg';
import { ReactComponent as ShareIcon } from './icons/share.svg';
import { ReactComponent as ArrowUpIcon } from './icons/arrowup.svg';
import { ReactComponent as ArrowDownIcon } from './icons/arrowdown.svg';
import cn from 'classnames';

export const Post: React.FC = () => {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.section_left}>
                    <div className={styles.topic}>
                        <img className={styles.topic__icon} src="https://leonardo.osnova.io/1630220b-e511-58f6-8916-826857983f77/-/scale_crop/64x64/" alt="" />
                        <span className={styles.topic__text}>Торговля</span>
                    </div>
                    <div className={styles.creator}>Екатерина Очаковская</div>
                    <div className={styles.creationTime}>вчера</div>
                </div>
                <div className={styles.section_right}>
                    <button className={styles.subscribe}>
                        <FollowIcon className={styles.subscribe__icon} />
                        <span className={styles.subscribe__text}>Подписаться</span>
                    </button>
                </div>
            </div>
            <h2 className={styles.title}>Без брендов: когда уйдут все обещавшие уйти модные магазины и что мы тогда будем носить</h2>
            <p className={styles.previewText}>С началом «спецоперации» иностранные компании массово покидают Россию, а fashion-ритейл понес, возможно, самые большие потери.</p>
            <img className={styles.contentImage} src="https://leonardo.osnova.io/386456ac-1536-5e02-ba20-f89d7476382f/-/preview/700/-/format/webp/" alt="" />
            <div className={styles.footer}>
                <div className={styles.section_left}>
                    <div className={styles.commentsCounter}>
                        <CommentsIcon className={cn(styles.controlIcon, styles.commentsCounter__icon)}/>
                        <span className={styles.commentsCounter__value}>24</span>
                    </div>
                    <BookmarkIcon className={cn(styles.controlIcon, styles.bookmarkIcon)} />
                    <ShareIcon className={cn(styles.controlIcon, styles.shareIcon)} />
                </div>
                <div className={styles.rank}>
                    <ArrowDownIcon className={styles.controlIcon} />
                    <div className={styles.rank__value}>6</div>
                    <ArrowUpIcon className={styles.controlIcon} />
                </div>
            </div>
        </div>
    )
}