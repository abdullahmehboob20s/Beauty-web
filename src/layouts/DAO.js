import React from "react";
import styles from "scss/layout/DAO.module.scss";
import lip from "assets/images/lip.svg";

function DAO() {
  return (
    <div className={`${styles.wrapper} `}>
      <div className="container-wrapper">
        <section className="relative">
          <img src={lip} className={`${styles.lip}`} alt="" />
          <div className={`${styles.content}`}>
            <p className="white fs-18px weight-7 mb-10px">cryptobeauties</p>
            <p className="fs-54px white weight-7 mb-30px">
              Crypto Beauties DAO
            </p>

            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              The DAO's mission and charter is to empower women and to increase
              diversity and inclusion in the NFT space.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              The DAO's treasury will be funded by 39 ETH from the project's
              initial minting, and an ongoing 50% of all secondary sale
              royalties from OpenSea.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              50 Crypto Beauties NFTs will be minted by the DAO and reserved for
              future marketing, partnerships, and community giveaways.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              The DAO will be run by the holders, for the holders.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DAO;
