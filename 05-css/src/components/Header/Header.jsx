import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brandBlock}>
        <span className={styles.brandBadge}>VC</span>
        <div>
          <h2>Vicky UI Lab</h2>
          <p>Practice project with cleaner CSS</p>
        </div>
      </div>
      <nav className={styles.navLinks}>
        <a href="#preview">Preview</a>
        <a href="#learn">Learn</a>
      </nav>
    </header>
  );
};

export default Header;
