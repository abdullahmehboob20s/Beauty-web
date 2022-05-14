import React from "react";
import styles from "scss/layout/Footer.module.scss";
import logoWhite from "assets/images/logo-white.svg";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ReactComponent as Opensea } from "assets/icons/opensea.svg";
import { ReactComponent as Etherscan } from "assets/icons/etherscan.svg";
import lip from "assets/images/lip.svg";

function Footer() {
  return (
    <div className={`${styles.wrapper} text-center`}>
      <footer className="relative">
        <img src={lip} className={`${styles.lip}`} alt="" />

        <div className="container-wrapper">
          <img src={logoWhite} className={`${styles.logo} mb-50px`} alt="" />

          <div className="mb-70px">
            <div className={`${styles.links} `}>
              <a
                href="https://discord.com/invite/NsW8aYFMJM"
                target="_blank"
                rel="noreferrer"
                className="fs-20px weight-7 white pointer font-open-sans"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/CryptoBeauties"
                target="_blank"
                rel="noreferrer"
                className="fs-20px weight-7 white pointer font-open-sans"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/cryptobeautiesnft/"
                target="_blank"
                rel="noreferrer"
                className="fs-20px weight-7 white pointer font-open-sans"
              >
                Instagram
              </a>
              <a
                href="https://omniform1.com/signup/v1/61bd3ca5be1f5d001d03c3fd_61bda75bc4b9a1001f47b17a.html"
                target="_blank"
                rel="noreferrer"
                className="fs-20px weight-7 white pointer font-open-sans"
              >
                Email List
              </a>
              <a
                href="https://terms.cryptobeauties.io/"
                target="_blank"
                rel="noreferrer"
                className="fs-20px weight-7 white pointer font-open-sans"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className={`${styles.socialIcons}`}>
            <a
              href="https://discord.com/invite/NsW8aYFMJM"
              className={`${styles.icon} flex`}
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/CryptoBeauties"
              className={`${styles.icon} flex`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/cryptobeautiesnft/"
              className={`${styles.icon} flex`}
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://opensea.io/collection/cryptobeauties-dao"
              className={`${styles.icon} flex`}
              target="_blank"
              rel="noreferrer"
            >
              <Opensea />
            </a>
            <a
              href="https://etherscan.io/address/0xfa1dbfeb3933acab666ce8bc7a20d5560fbe2504"
              className={`${styles.icon} flex`}
              target="_blank"
              rel="noreferrer"
            >
              <Etherscan />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
