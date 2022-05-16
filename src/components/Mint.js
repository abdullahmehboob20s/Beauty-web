import React, { useState } from "react";
import styles from "scss/components/Mint.module.scss";
import mintImg from "assets/images/mint-img.png";
import { ImPlus, ImMinus } from "react-icons/im";
import heart from "assets/images/heart.png";
import lip from "assets/images/lip.svg";

function Mint() {
  const [counter, setCounter] = useState(1);
  return (
    <div className={`${styles.wrapper}`}>
      <div className={` container-wrapper`}>
        <h2 className="fs-24px text-center green weight-7 mb-40px">
          Public Sale Minting is Live Now!
        </h2>

        <main>
          {/* <img src={lip} className={`${styles.lip}`} alt="" /> */}

          <div className={`${styles.imgWrapper} radius-12px`}>
            <img src={mintImg} className="radius-12px" alt="" />
          </div>
          <aside>
            <header className="bg-green radius-12px mb-35px">
              <p className="fs-18px white weight-7 mb-10px">cryptobeauties</p>
              <h1 className="fs-54px white weight-7 mb-30px lh-1_1">
                Mint Crypto Beauties
              </h1>
              <h2 className="fs-22px white weight-7">2169 / 11,111</h2>
            </header>

            <p className="fs-22px black weight-7 mb-25px">
              You can mint up to 40 NFTs!
            </p>

            <p className="font-open-sans fs-18px weight-4 mb-35px opacity-0_5">
              Each Crypto Beauties NFT costs only 0.029 ETH + gas.
            </p>

            <div className="mb-35px">
              <div className={`${styles.counter}`}>
                <button
                  className="green pointer opacity-hover-effect"
                  onClick={() => setCounter((val) => (val < 2 ? val : val - 1))}
                >
                  <ImMinus />
                </button>
                <p className="green fs-40px weight-6">
                  {counter < 10 ? "0" : ""}
                  {counter}
                </p>
                <button
                  className="green pointer opacity-hover-effect"
                  onClick={() => setCounter((val) => val + 1)}
                >
                  <ImPlus />
                </button>
              </div>
            </div>

            <footer>
              <p className="black fs-22px weight-7 mb-15px">
                TOTAL : 0.029 ETH
              </p>
              <button className="pointer opacity-hover-effect">
                <span className={`${styles.heart}`}>
                  <img src={heart} alt="" />
                </span>
                <span className="fs-22px white weight-6">Mint Now</span>
              </button>
            </footer>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default Mint;
