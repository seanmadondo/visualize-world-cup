import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>

      <Link href="/">Matches</Link>

      <Link href="/">Teams</Link>

      <Link href="/">Standings</Link>
    </div>
  );
};
