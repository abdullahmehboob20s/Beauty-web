import React from "react";
import styles from "scss/layout/Mission.module.scss";
import nftImg1 from "assets/images/nftImg1.png";

function Mission() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <main>
          <header className="mb-50px">
            <img src={nftImg1} alt="" />
          </header>

          <section>
            <p className="white fs-18px weight-7 mb-10px">cryptobeauties</p>
            <p className="fs-54px white weight-7 mb-30px">
              Will You Join Our Mission?
            </p>

            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              Join our mission to help empower women & increase diversity in the
              NFT space!
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              65+ ETH from the project's mint will be donated to women’s
              empowerment causes and to fund a DAO, which will further advance
              the communities' charter of diversity and inclusion.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              The artwork is a nod to iconic and groundbreaking projects such as
              Cryptopunks, Boss Beauties, and 0N1 Force.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              Each NFT costs only .029 ETH.
            </p>
            <p className="font-open-sans fs-20px white weight-4 lh-1_6 mb-15px">
              Please join us on Twitter and Discord to learn more and become
              part of our community.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Mission;
