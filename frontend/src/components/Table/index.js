"use client"

import styles from "./table.module.scss";
import Thead from "@/components/Table/Thead";

export default function Table({ headers, contentBigger, smallContent, haveActions }) {
  return (
    <>
      <div className={styles.contentBigger}>
        <div className={styles.content}>
          <table className={styles.content__table}>
            <Thead headers={headers} haveActions={haveActions}/>
            <tbody className={styles.content__table__body}>
              {contentBigger}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.contentSmall}>
        <div className={styles.content}>
          <table className={styles.content__table}>
            <tbody className={styles.content__table__body}>
              {smallContent}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

