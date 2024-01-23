import { withAuth } from "../with-auth";
import styles from "./styles.module.css";

function Header({ handleNumber, number }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          Learning NextJs
        </div>
        <div className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
