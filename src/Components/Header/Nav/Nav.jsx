import styles from "./Nav.module.css";
import Logo from "../../../Image/Logo.svg?react";
import SearchIcon from "../../../Image/Icons/SearchIcon";
import BellIcon from "../../../Image/Icons/BellIcon";
import { Link, useNavigate } from "react-router-dom";
import useHover from "../useHover";

const Nav = () => {
  //로고 클릭 시 홈화면 이동
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/");
  };
  const { ishovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <Logo
          width="90px"
          height="50px"
          onClick={() => {
            navigateTo("/");
          }}
        />
        {/*검색바 */}
        <div className={styles.nav__searchBar_container}>
          <div className={styles.nav__searchBar}>
            <input
              className={styles.nav__searchbar_input}
              placeholder="프로젝트부터 포트폴리오까지!"
            ></input>
            <button className={styles.nav__searchIcon}>
              <SearchIcon />
            </button>
          </div>
        </div>

        {/*상단 네비게이터 */}
        <ul className={styles.nav__contentsWrap}>
          <li>로그아웃</li>
          <Link to="mypage/profile">
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              마이페이지
              {/*서브 네비게이터 */}
              {ishovered && (
                <ul className={styles.nav__subnav}>
                  <Link to="mypage/profile">
                    <li>프로필 관리</li>
                  </Link>
                  <Link to="mypage/portfolio">
                    <li onClick={() => navigateTo("mypage/portfolio")}>
                      포트폴리오 관리
                    </li>
                  </Link>
                  <li onClick={() => alert("수정중")}>개인정보 수정</li>
                </ul>
              )}
            </li>
          </Link>
          <li>
            <BellIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
