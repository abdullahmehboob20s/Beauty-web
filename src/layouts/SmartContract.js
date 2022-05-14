import React from "react";
import styles from "scss/layout/SmartContract.module.scss";

function SmartContract() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <section>
          <aside>
            <p className="green fs-18px weight-7 mb-10px">cryptobeauties</p>
            <p className="fs-54px weight-7 black">Smart Contract</p>
          </aside>
          <main>
            <p className="fs-20px font-open-sans weight-7 mb-15px">
              You can also mint through our Smart Contract on Etherscan:
            </p>
            <a
              href="https://etherscan.io/address/0xfa1dbfeb3933acab666ce8bc7a20d5560fbe2504"
              target="_blank"
              rel="noreferrer"
              className="font-open-sans weight-4 fs-20px black"
            >
              https://etherscan.io/address/0xfa1dbfeb3933acab666ce8bc7a20d5560fbe2504
            </a>
          </main>
        </section>
      </div>
    </div>
  );
}

export default SmartContract;
