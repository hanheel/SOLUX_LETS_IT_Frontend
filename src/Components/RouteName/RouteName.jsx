import ArrowIcon from '../../Image/Icons/ArrowIcon';
import styles from './RouteName.module.css';

const RouteName = ({ route }) => {
  return (
    <div className={styles.routename}>
      {route.map((item, index) => (
        <h1 className={styles.routename__item} key={index}>
          {item}
          {index < route.length - 1 && <ArrowIcon className={styles.icon}/>} {/* SVG 아이콘을 추가합니다. */}
        </h1>
      ))}
    </div>
  );
};

export default RouteName;
