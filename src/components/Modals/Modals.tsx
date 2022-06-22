import styles from './Modals.module.scss';

export const Modals: React.FC = () => {
    return (
        <div className={styles.modals}>
            <div className={styles.modals__container}>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}