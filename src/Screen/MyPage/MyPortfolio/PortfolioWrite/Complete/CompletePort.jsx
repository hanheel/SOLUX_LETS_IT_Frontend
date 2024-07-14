import Button from "../../../../../Components/Button/Button";
import RouteName from "../../../../../Components/RouteName/RouteName";
import SideNav from "../../../../../Components/SideNav/SideNav";
import styles from "./CompletePort.module.css";

const route = ["마이페이지", "포트폴리오 관리", "포트폴리오 작성"];
const sidenavCont = ["프로필 관리", "포트폴리오 관리", "개인정보 수정"];
const CompletePort = () => {
  return (
    <div className={styles.CompletePort__contentWrap}>
      {/*프로젝트명 + 주의문구 + AI로 생성된 포폴 */}

      {/*프로젝트명 + 주의 문구*/}
      <div className={styles.CompletePort__title}>
        OPEN AI 활용 프로젝트
        {/*생성형 AI 포폴 주의 문구 */}
        <div className={styles.CompletePort__warning}>
          생성형 AI가 요약 작성한 내용으로, 참고용으로 활용하시기 바랍니다
        </div>
      </div>

      {/*AI로 생성된 포폴 */}
      <div className={styles.CompletePort__content}></div>
      <div className={styles.CompletePort__saveBtn}>
        <Button text="저장" />
      </div>
    </div>
  );
};

export default CompletePort;
