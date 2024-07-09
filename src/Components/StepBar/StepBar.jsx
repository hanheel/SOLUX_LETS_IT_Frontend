import styles from "./StepBar.module.css";

const StepBar = ({ type }) => {
  return (
    <div className={styles.stepBar}>
      <div className={styles.stepBar__label}>
        프로젝트에 신청하기 위해선 최초 1회 <span>실명 인증</span> 및
        <span> 프로필 작성</span>이 필요합니다.
      </div>
      <div className={styles.stepBar__step}>
        <div className={styles.stepBar__stepNum}>
          <div className={styles["stepBar__num--COMPLETE"]}>1</div>
          <div
            className={`${styles.stepBar__num} ${
              styles[`stepBar__num--${type}`]
            }`}
          >
            2
          </div>
        </div>
        <div>
          <div
            className={`${styles.stepBar__bar} ${
              styles[`stepBar__bar--${type}`]
            }`}
          ></div>
        </div>
        <div className={styles.stepBar__stepLabel}>
          <div className={styles["stepBar__text--COMPLETE"]}>실명 인증</div>
          <div
            className={`${styles.stepBar__text} ${
              styles[`stepBar__text--${type}`]
            }`}
          >
            프로필 작성
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepBar;
