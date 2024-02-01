import styles from "./about.module.css"
import Image from "next/image"

const About = () =>{
    return(
        <div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt ="" fill/>
            </div>  
        </div>
    )
}
export default About