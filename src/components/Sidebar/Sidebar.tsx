import { NavLink, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { ReactComponent as PopularIcon} from './icons/popular.svg';
import { ReactComponent as RecentIcon} from './icons/recent.svg';
import cn from 'classnames';

interface IBarLink {
    to: string
    name: string
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
} 

export const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li className={styles.linkWrapper}>
                    <BarLink to='popular' name='Популярное' Icon={PopularIcon}/>
                </li>
                <li className={styles.linkWrapper}>
                    <BarLink to='new' name='Свежее' Icon={RecentIcon}/>
                </li>
            </ul>
        </nav>
    )
}

const BarLink: React.FC<IBarLink> = ({ to, name, Icon }) => {
    let location = useLocation();

    const classPicker = ({ isActive }: {isActive: boolean}) => {
        if (location.pathname === '/' && to === 'popular') isActive = true;
        return cn(styles.link, {[styles.linkActive]: isActive});
    }

    return (
        <NavLink className={classPicker} to={to}>
            <Icon />
            <span className={styles.linkName}>{name}</span>
        </NavLink>
    )
}