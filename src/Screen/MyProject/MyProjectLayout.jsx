import RouteName from "../../Components/RouteName/RouteName";
import SideNav from "../../Components/SideNav/SideNav";
import styles from "./MyProjectLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { getMyProjectRoute } from "./getMyProjectRoute";

const MyPageLayout = () => {
  //사이드 nav contents
  const sidenavCont = ["구인/신청 프로젝트", "참여 프로젝트", "스크랩"];
  //현재 위치 주소 반환
  const location = useLocation();
  console.log(location);
  const path = location.pathname;
  //루트 네임 - js 파일 분리
  let { name } = getMyProjectRoute(path);
  const route = ["내 프로젝트", name && `${name}`];
  //사이드 nav 링크
  const link = [
    "/myproj/hiring-and-applied",
    "/myproj/attendproj",
    "/myproj/scrap",
  ];

  return (
    <div className={styles.myProject}>
      <RouteName route={route} />
      <div className={styles.myProject__sideNav}>
        <SideNav link={link} content={sidenavCont} />
        {/*주소에 맞게 content 렌더링 */}
        <Outlet />
      </div>
    </div>
  );
};

export default MyPageLayout;
