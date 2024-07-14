import ArrowIcon from "../../Image/Icons/ArrowIcon";
import styles from "./RouteName.module.css";

const RouteName = ({ route }) => {
  console.log(route);
  return (
    <div className={styles.routename}>
      {route.map((item, index) => (
        <h1 className={styles.routename__item} key={index}>
          {item}
          {index < route.length - 1 &&
          //다음 값이 없다면 화살표 아이콘을 출려하지 않는다
          route[index + 1] !== "" &&
          route[index + 1] !== null &&
          route[index + 1] !== undefined ? (
            <ArrowIcon className={styles.icon} />
          ) : null}
          {/* SVG 아이콘을 추가합니다. */}
        </h1>
      ))}
    </div>
  );
};

export default RouteName;
