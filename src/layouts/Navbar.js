import React from "react";
import styles from "scss/layout/Navbar.module.scss";
// import logo from "assets/images/logo.svg";
import logo from "assets/images/logoPng.png";

function Navbar() {
  return (
    <div className={`${styles.navbar} container-wrapper`}>
      <img src={logo} className={`${styles.logo}`} alt="" />

      <button className="bg-red white radius-12px fs-22px weight-6 pointer opacity-hover-effect">
        Connect Wallet
      </button>
    </div>
  );
}

export default Navbar;
