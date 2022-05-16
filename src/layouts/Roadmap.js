import React from "react";
import styles from "scss/layout/Roadmap.module.scss";
import nftimg2 from "assets/images/nftImg2.png";

function Roadmap() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <section>
          <main>
            <p className="green fs-18px weight-7 mb-10px">cryptobeauties</p>
            <p className="fs-54px black weight-7 mb-30px lh-1_2">
              {/* Will You Join Our Mission? */}
              High-Level Roadmap
            </p>

            <p className="font-open-sans fs-20px black weight-4 lh-1_6 opacity-0_8 mb-25px">
              65+ ETH from the project's mint will be donated to women’s
              empowerment causes and to fund a DAO, which will further advance
              the communities' charter of diversity and inclusion.
            </p>
            <ul className="mb-25px">
              <li className="font-open-sans fs-20px black weight-4 lh-1_6 opacity-0_8 mb-10px">
                Every Mother Counts
              </li>
              <li className="font-open-sans fs-20px black weight-4 lh-1_6 opacity-0_8 mb-10px">
                Girls Who Code
              </li>
            </ul>
            <p className="font-open-sans fs-20px black weight-4 lh-1_6 opacity-0_8">
              Upon sellout of the collection, additional utility will be added
              to the collection including a $BEAUTIES coin, liquidity pool,
              staking, merch, Gen2 Crypto Beauties, and more. Please see our
              Discord for more information.
            </p>
          </main>
          <aside>
            <img src={nftimg2} alt="" />
          </aside>
        </section>
      </div>
    </div>
  );
}

export default Roadmap;
