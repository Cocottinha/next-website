import styles from "@/app/home.module.css"
import Image from "next/image";

const Home = () => { 
  return <div className={styles.container}>
    <div className={styles.textbox}>
      <h1 className={styles.title}>Nº 1 do Brasil</h1>
      <p className={styles.desc}>
        Lorem Ipsum, dorem!
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}></Image>
      </div>
    </div>
    <div className={styles.imgcontainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}></Image>
    </div>
  </div>;
};

export default Home;