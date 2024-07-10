import { useState } from "react";
import styles from "./SkillRange.module.css";

const SkillRange = ({ skillName = "skill-name", value = "50" }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onChangeRange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <div className={styles.skillRange}>
      <div className={styles.skillRange__skillName}>{skillName}</div>
      <div className={styles.skillRange__slide}>
        <div
          className={styles.skillRange__track}
          style={{ width: `${currentValue}%` }}
        ></div>
        <input
          type="range"
          value={currentValue}
          min="0"
          max="100"
          onChange={onChangeRange}
        />
      </div>
      <div className={styles.skillRange__value}>{currentValue}</div>
    </div>
  );
};

export default SkillRange;
