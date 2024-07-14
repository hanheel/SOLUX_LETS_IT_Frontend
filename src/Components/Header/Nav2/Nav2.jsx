import styles from "./Nav2.module.css";
import { Link, useNavigate } from "react-router-dom";
import useHover from "../useHover";

const Nav2 = () => {
  //로고 클릭 시 main으로 이동
  const navigateTo = (link) => {
    navigate(`${link}`);
  };

  const { ishovered, activeditem, handleMouseEnter, handleMouseLeave } =
    useHover();

  return (
    <div className={styles.nav2}>
      <div className={styles.nav2__container}>
        <div className={styles.nav2__contentsWrap}>
          <ul>
            {/*프로젝트 찾기*/}
            <Link to="projects/home">
              <li
                className={styles.nav2__content}
                onMouseEnter={() => handleMouseEnter("프로젝트 찾기")}
                onMouseLeave={handleMouseLeave}
              >
                프로젝트 찾기
                {ishovered && activeditem == "프로젝트 찾기" && (
                  <ul className={styles.nav2__subnav}>
                    <Link to="projects/home">
                      <li className={styles.nav2__subnav_item}>
                        전체 프로젝트
                      </li>
                    </Link>
                    <Link to="projects/area">
                      <li className={styles.nav2__subnav_item}>
                        지역으로 찾기
                      </li>
                    </Link>
                    <Link to="projects/field">
                      <li className={styles.nav2__subnav_item}>분야로 찾기</li>
                    </Link>
                    <Link to="projects/fit">
                      <li className={styles.nav2__subnav_item}>
                        내 맞춤 프로젝트
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
            </Link>

            {/*내 프로젝트 */}
            <li
              className={styles.nav2__content}
              onMouseEnter={() => handleMouseEnter("내 프로젝트")}
              onMouseLeave={handleMouseLeave}
            >
              내 프로젝트
              {ishovered && activeditem == "내 프로젝트" && (
                <ul className={styles.nav2__subnav}>
                  <Link to="myproj/hiring-and-applied">
                    <li className={styles.nav2__subnav_item}>
                      구인/신청 프로젝트
                    </li>
                  </Link>
                  <Link to="myproj/attendproj">
                    <li className={styles.nav2__subnav_item}> 참여 프로젝트</li>
                  </Link>
                  <Link to="myproj/scrap">
                    <li className={styles.nav2__subnav_item}>스크랩</li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <button
          className={styles.nav2__writeBtn}
          onClick={() => {
            navigateTo("projects/post");
          }}
        >
          구인글 작성
        </button>
      </div>
    </div>
  );
};

export default Nav2;
