import ToolIcon from "../ToolIcon/ToolIcon";
import styles from "./SelectIcon.module.css";

const SelectIcon = ({ children }) => {
  const msg = (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
      <ToolIcon type="SHADOW" />
    </div>
  );

  return (
    <div className={styles.SelectIcon}>
      {children}
      <div className={styles.SelectIcon__msg}>{msg}</div>
    </div>
  );
};

export default SelectIcon;
