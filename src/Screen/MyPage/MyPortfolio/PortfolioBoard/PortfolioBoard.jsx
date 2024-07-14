import Button from "../../../../Components/Button/Button";
import RouteName from "../../../../Components/RouteName/RouteName";
import SideNav from "../../../../Components/SideNav/SideNav";
import styles from "./PortfolioBoard.module.css";
import { useState } from "react";
import Paging from "../../../../Components/Paging/Paging";
import { useNavigate } from "react-router-dom";

const route = ["마이페이지", "포트폴리오 관리", "포트폴리오 게시판"];
const sidenavCont = ["프로필 관리", "포트폴리오 관리", "개인정보 수정"];

//mock data
const mockData = [
  { title: "코드컨벤션 논의", date: "2020-12-10" },
  { title: "역할 분담", date: "2021-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
  { title: "3주차의 기록", date: "2022-12-10" },
];

const PortfolioBoard = () => {
  //현재 페이지
  const [activePage, setActivePage] = useState(1);

  //한 페이지 당 보여줄 아이템 개수
  const itemsCountPerPage = 10;

  //페이지네이션 한 번에 몇 번까지 보여줄 건지
  const pageRangeDisplayed = 5;

  //페이지 변경 핸들링 함수
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  //실제 렌더링할 데이터 (data를 슬라이스 함 0-9 / 10-19..)
  const renderData = mockData.slice(
    (activePage - 1) * itemsCountPerPage,
    activePage * itemsCountPerPage
  );
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <div className={styles.PortfolioBoard__contentWrap}>
      {/*포트폴리오명 */}
      <div className={styles.PorfolioBoard__portfolioTitle}>
        OPEN AI 활용 프로젝트
      </div>

      {/*포트폴리오 리스트 */}
      <ul className={styles.PortfolioBoard__table}>
        {/*행 제목 : 순번, 제목, 작성 일자 */}
        <li>
          <ul className={styles.PortfolioBoard__rowHeader}>
            <li className={styles.PortfolioBoard__headerCell}>순번</li>
            <li className={styles.PortfolioBoard__headerCell}> 제목</li>
            <li className={styles.PortfolioBoard__headerCell}>작성 일자</li>
          </ul>
        </li>

        {/*포트폴리오 data 순회(renderData-몇 개씩 출력할 건지 계산된), li 로 출력*/}
        {renderData.map((data, idx) => (
          <li key={idx}>
            <ul className={styles.PortfolioBoard__list}>
              <li className={styles.PortfolioBoard__cell}>
                {idx + (activePage - 1) * itemsCountPerPage}
              </li>
              <li className={styles.PortfolioBoard__cell}>{data.title}</li>
              <li className={styles.PortfolioBoard__cell}>{data.date}</li>
              <Button text="수정" type="NONE__TEXT-MC2-16" />
            </ul>
          </li>
        ))}
      </ul>

      <div className={styles.PortfolioBoard__btnWrap}>
        <Button
          onClick={() => {
            navigateTo("/mypage/portfolio/post/summaryAI");
          }}
          text="AI포트폴리오"
          type="741EFF_150x40"
        />
        <Button
          onClick={() => {
            navigateTo("/mypage/portfolio/post");
          }}
          text="글쓰기"
        />
      </div>

      <Paging
        activePage={activePage} //현재 페이지
        totalItemsCount={mockData.length} //전체 data의 개수
        itemsPerPage={itemsCountPerPage} //페이지 당 보여줄 아이템 개수
        handlePageChange={handlePageChange}
        pageRangeDisplayed={pageRangeDisplayed}
      />
    </div>
  );
};

export default PortfolioBoard;
