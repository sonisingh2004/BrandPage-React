import styles from './Header.module.css'
import logo from './images/brand_logo.png'
function Header() {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menuItem}>MENU</div>
                <div className={styles.menuItem}>LOCATION</div>
                <div className={styles.menuItem}>ABOUT</div>
                <div className={styles.menuItem}>CONTACT</div>
                <img className={styles.logo} src={logo} />
                <div className={styles.button}>
                    <button>login</button>
                </div>
            </div>
        </>
    )
}
export default Header
