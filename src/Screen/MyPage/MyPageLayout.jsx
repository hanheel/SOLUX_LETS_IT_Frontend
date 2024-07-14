import RouteName from "../../Components/RouteName/RouteName";
import SideNav from "../../Components/SideNav/SideNav";
import styles from "./MyPageLayout.module.css";
import { useLocation } from "react-router-dom";
import MyProfile from "./MyProfile/MyProfile";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import PortfolioWrite from "./MyPortfolio/PortfolioWrite/PortfolioWrite";
import PortfolioBoard from "./MyPortfolio/PortfolioBoard/PortfolioBoard";
import CompletePort from "./MyPortfolio/PortfolioWrite/Complete/CompletePort";
import { getRouteNames } from "./getRouteNames";

const MyPageLayout = () => {
  //사이드 nav contents
  const sidenavCont = ["프로필 관리", "포트폴리오 관리", "개인정보 수정"];
  //현재 위치 주소 반환
  const location = useLocation();
  const path = location.pathname;
  //루트 네임 - js 파일 분리
  let { name, subName } = getRouteNames(path);
  const route = ["마이페이지", name && `${name}`, subName && `${name}`];
  //사이드 nav 링크
  const link = ["/mypage/profile", "/mypage/portfolio"];

  return (
    <div className={styles.myProfile}>
      <RouteName route={route} />
      <div className={styles.myProfile__sideNav}>
        <SideNav link={link} content={sidenavCont} />
        {/*주소에 맞게 content 렌더링 */}
        {name === "프로필 관리" && !subName && <MyProfile />}
        {name === "포트폴리오 관리" && !subName && <MyPortfolio />}
        {subName === "포트폴리오 작성" && <PortfolioWrite />}
        {subName === "포트폴리오 게시판" && <PortfolioBoard />}
        {subName === "AI 포트폴리오" && <CompletePort />}
      </div>
    </div>
  );
};

export default MyPageLayout;
