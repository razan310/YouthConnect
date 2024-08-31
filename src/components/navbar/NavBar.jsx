import { useState } from "react";
import styles from "./navbar.module.css";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu toggled:", isMenuOpen); 
    };

    return (
        <header>
            <nav className={styles.navItem}>
                <h1 className={styles.logo}>Youth Connect</h1>
                <ul className={styles.navbar_menu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Projects</li>
                    <li>Values</li>
                    <li>Contact Us</li>
                </ul>
                <button className={styles.button1}>Sign In</button>
                <div className={styles.menu_icons} onClick={toggleMenu}>
                    <FaBarsStaggered />
                </div>
                <div className={`${styles.nav_menu} ${isMenuOpen ? styles.active : ""}`}>
                    {console.log("Menu class applied:", isMenuOpen ? styles.active : "inactive")}
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Our Projects</li>
                        <li>Values</li>
                        <li>Contact Us</li>
                    </ul>
    <button className={styles.button1}>Sign In</button>
</div>

            </nav>
        </header>
    );
};

export default NavBar;
