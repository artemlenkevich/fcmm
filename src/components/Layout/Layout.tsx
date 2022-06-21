import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import styles from './Layout.module.scss'

export const Layout = () => {
    return (
        <>
            <Header />
            <div className={styles.mainLayout}>
                <div className={styles.leftColumn}>
                    <Sidebar />
                </div>
                <main className={styles.mainContent}>
                    <Outlet />
                </main>
                <div className={styles.rightColumn}></div>
            </div>
        </>
    )
}