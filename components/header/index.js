import { useQueries } from "@/hooks/useQueries";
import { withAuth } from "../with-auth";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { useContext } from "react";
import { userContext } from "@/context/userContext";

function Header({ handleNumber, number }) {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          Learning NextJs
        </div>
        <div className={styles.nav}>
          <a href="/">
            {/* {userData?.name} */}
          </a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/notes">Notes</a>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
