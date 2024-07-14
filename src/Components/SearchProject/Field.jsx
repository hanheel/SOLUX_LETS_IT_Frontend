import styles from "./Field.module.css";
import SearchIcon from "../../Image/Icons/SearchIcon";
import Stackblist from "./Stackblist";
import Button from "../Button/Button";

const f = ["웹", "앱", "인공지능", "데이터 분석", "클라우드"];
const s = ["React", "Javascript", "Java", "Python", "Spring"];

const Field = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>개발 분야</h1>
        <div className={styles.nav__searchBar_container}>
          <div className={styles.nav__searchBar}>
            <input
              className={styles.nav__searchbar_input}
              placeholder="개발 분야 검색"
            ></input>
            <button className={styles.nav__searchIcon}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className={styles.button}>
          <Stackblist buttons={f} />
        </div>
      </div>

      <div>
        <h1 className={styles.title}>필요 스택</h1>
        <div className={styles.nav__searchBar_container}>
          <div className={styles.nav__searchBar}>
            <input
              className={styles.nav__searchbar_input}
              placeholder="스택 검색"
            ></input>
            <button className={styles.nav__searchIcon}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className={styles.button}>
          <Stackblist buttons={s} />
        </div>
        <div className={styles.searchb}>
          <Button text="검색" height="40px" borderRadius="8px" />
        </div>
      </div>
    </div>
  );
};

export default Field;
