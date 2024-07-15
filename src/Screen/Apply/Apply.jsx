import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import RouteName from "../../Components/RouteName/RouteName";
import styles from "./Apply.module.css";
import BriefProfile from "./BriefProfile/BriefProfile";

//mock data
const user = {
  name: "김코더",
  age: "20대 초반",
  bio: "시각화로 소통하는 주니어 개발자",
};

const Apply = () => {
  //제출 전 alert
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/myproj/hiring-and-applied");
  };
  const warning = () => {
    if (
      window.confirm(
        '프로젝트를 신청할 경우, 구인글 작성자에게 "실명, 이메일, 프로필"이 제공됩니다. 계속하시겠습니까?'
      )
    ) {
      alert("제출되었습니다");
      navigateTo();
    } else {
      alert("취소되었습니다");
    }
  };
  return (
    <div>
      <RouteName route={["프로젝트 신청"]} />
      <div className={styles.apply}>
        {/*프로필 미리보기 */}
        <div className={styles.apply__profile}>
          <div className={styles.apply__title}>프로필 미리보기</div>
          {/*프로필을 담을 box */}
          <div className={styles.apply__profile_container}>
            <BriefProfile user={user} />
          </div>
        </div>

        {/*지원서  폼 */}
        <form className={styles.apply__form}>
          {/*지원 정보 확인 */}
          <div className={styles.apply__container}>
            <div className={styles.apply__title}>지원정보확인</div>
            <span>프로젝트명 |</span>
          </div>
          {/*선호 스택 */}
          <div className={styles.apply__container}>
            <div className={styles.apply__title}>선호 스택</div>
            <input className={styles.apply__input} placeholder="리액트"></input>
          </div>
          {/*희망 분야 */}
          <div className={styles.apply__container}>
            <div className={styles.apply__title}>희망 분야</div>
            <input
              className={styles.apply__input}
              placeholder="프론트엔드"
            ></input>
          </div>
          {/*전달메세지 */}
          <div className={styles.apply__container}>
            <div className={styles.apply__title}>전달 메세지</div>
            <textarea
              placeholder="사용할 수 있는 기술 스택, 자기 소개 등"
              className={`${styles.apply__input} ${
                styles[`apply__input--textarea`]
              }`}
            ></textarea>
          </div>
          {/*연락 수단 */}
          <div className={styles.apply__container}>
            <div className={styles.apply__title}>연락 수단</div>
            <input
              className={styles.apply__input}
              placeholder="1234@gmail.com"
            ></input>
          </div>
          <div className={styles.button__container}>
            <Button text="신청하기" onClick={warning} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
