import styles from "./MainHome.module.css";
import Header from "../../Components/Header/Header";

import MainTitle from "../../Components/MainTitle/MainTitle";
import MainManageButton from "../../Components/MainManegeButton/MainManageButton";
import RecommendProject from "../../Components/RecommendProject/RecommendProject";
import PopularProject from "../../Components/PopularProject/PopularProject";

function MainHome() {
  return (
  <div className={styles.wrap}>
    <Header />
    <MainTitle />
    <MainManageButton/>
    <RecommendProject />
    <PopularProject />
    <div className={styles.main}> 
    {/*<MyProfile />*/} {/*라우팅 시 outlet이 들어갈 부분*/}
    </div>
  </div>
  )
}

export default MainHome;