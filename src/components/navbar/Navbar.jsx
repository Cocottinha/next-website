import Links from "./links/Links"
import styles from "./navbar.module.css"
const Navbar = () => {

    
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Laboratório Móvel</div>
            <div>
                <Links></Links>
            </div>
        </div>
    )
}

export default Navbar