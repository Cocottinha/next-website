import Links from "./links/Links"
import styles from "./navbar.module.css"
import Link from "next/link"

const Navbar = () => {

    
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Laboratório Móvel</Link>
            <div>
                <Links></Links>
            </div>
        </div>
    )
}

export default Navbar