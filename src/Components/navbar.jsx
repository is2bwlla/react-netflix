import styles from './navbar.module.css';

export function Navbar() {
    return (
        <nav className={styles.container}>
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
            </ul>
        </nav>
    )
}