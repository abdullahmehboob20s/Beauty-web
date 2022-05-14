import React from "react";
import styles from "scss/layout/Ownership.module.scss";

function Ownership() {
  return (
    <div className={`${styles.wrapper} py-100px text-center`}>
      <div className="container-wrapper">
        <main>
          <p className="fs-18px weight-7 mb-10px green">cryptobeauties</p>
          <p className="fs-54px black weight-7 mb-40px">
            Ownership & IP Rights
          </p>

          <p className="font-open-sans fs-20px weight-4 black opacity-0_6 mb-25px">
            You own the NFT that you purchase. Each Crypto Beauties is an NFT on
            the Ethereum blockchain. When you purchase an NFT, you own the
            underlying Crypto Beauties, the Art, completely.
          </p>
          <p className="font-open-sans fs-20px weight-4 black opacity-0_6 ">
            Each Crypto Beauties owner is granted an unlimited, worldwide
            license to use, copy, and display the purchased Art for the purpose
            of creating derivative works based upon the Art for unrestricted
            personal and commercial use.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Ownership;
