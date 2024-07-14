import RouteName from "../../../Components/RouteName/RouteName";
import SideNav from "../../../Components/SideNav/SideNav";
import styles from "./Scrap.module.css";

const route = ["내 프로젝트", "스크랩"];
const sidenavCont = ["구인/신청 프로젝트", "참여 프로젝트", "스크랩"];

const Scrap = () => {
  return (
    <div className={styles.Scrap__contWrap}>
      {/*스크랩한 프로젝트*/}

      <div className={styles.Scrap__title}>스크랩</div>
      {/*스크랩한 프로젝트 나열*/}
      <div className={styles.Scrap__cont}>프로젝트 컴포넌트 불러오기</div>
    </div>
  );
};

export default Scrap;
