import RouteName from "../../Components/RouteName/RouteName";
import SideNav from "../../Components/SideNav/SideNav";
import styles from "./MyPageLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { getRouteNames } from "./getMyPageRoute";

const MyPageLayout = () => {
  //사이드 nav contents
  const sidenavCont = ["프로필 관리", "포트폴리오 관리", "개인정보 수정"];
  //현재 위치 주소 반환
  const location = useLocation();
  const path = location.pathname;
  //루트 네임 - js 파일 분리
  let { name, subName } = getRouteNames(path);
  const route = ["마이페이지", name && `${name}`, subName && `${subName}`];
  //사이드 nav 링크
  const link = ["/mypage/profile", "/mypage/portfolio"];

  return (
    <div className={styles.myPage}>
      <RouteName route={route} />
      <div className={styles.myPage__sideNav}>
        <SideNav link={link} content={sidenavCont} />
        {/*주소에 맞게 content 렌더링 */}
        <Outlet />
      </div>
    </div>
  );
};

export default MyPageLayout;
