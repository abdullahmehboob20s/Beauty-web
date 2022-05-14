import React from "react";
import styles from "scss/layout/Hero.module.scss";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Mint from "components/Mint";
import { ReactComponent as Opensea } from "assets/icons/opensea.svg";
import { ReactComponent as Etherscan } from "assets/icons/etherscan.svg";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div>
      <div className={`${styles.wrapper} container-wrapper`}>
        <div className="mb-60px">
          <h1
            className={`text-center fs-64px black weight-7 ${
              isBellow600px ? "mb-20px" : "mb-80px"
            } `}
          >
            Crypto Beauties DAO
          </h1>

          <section>
            <a
              href="https://discord.com/invite/NsW8aYFMJM"
              className={`${styles.icon} flex green`}
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/CryptoBeauties"
              className={`${styles.icon} flex green`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/cryptobeautiesnft/"
              className={`${styles.icon} flex green`}
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
          </section>
        </div>
      </div>
      <Mint />
    </div>
  );
}

export default Hero;
