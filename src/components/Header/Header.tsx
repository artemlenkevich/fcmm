import styles from './Header.module.scss';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as DonateIcon } from './icons/donate.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as LoginIcon } from './icons/login.svg';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__section_left}>
                <Burger />
                <Logo className={styles.logo}/>
                <Donate />
            </div>
            <div className={styles.header__section_center}>
                <input className={styles.search} type="text" placeholder='Поиск'/>
                <button className={styles.create_btn}>
                    <PlusIcon className={styles.create_btn__icon}/>
                    Создать
                </button>
            </div>
            <div className={styles.header__section_right}>
                <BellIcon className={styles.bell}/>
                <div className={styles.login}>
                    <LoginIcon className={styles.login__icon}/>
                    <span className={styles.login__text}>Войти</span>
                </div>
            </div>
        </header>
    )
}

const Burger: React.FC = () => {
    return <div className={styles.burger} />           
}

const Donate: React.FC = () => {
    return (
        <div className={styles.donate}>
            <DonateIcon className={styles.donate__icon}/>
            <span className={styles.donate__text}>Поддержать</span>
        </div>
    )
}