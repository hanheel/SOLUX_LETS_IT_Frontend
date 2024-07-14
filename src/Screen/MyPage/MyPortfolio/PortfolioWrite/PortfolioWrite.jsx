import Button from "../../../../Components/Button/Button";
import SearchIcon from "../../../../Image/Icons/SearchIcon";
import FormInput from "./FormInput";
import styles from "./PortfolioWrite.module.css";

const PortfolioWrite = () => {
  return (
    <div className={styles.portfolioWrite__contentWrap}>
      {/*프로젝트명 + 포트폴리오 작성 폼 */}

      {/*프로젝트명 */}
      <h3 className={styles.portfolioWrite__title}>OPEN AI 활용 프로젝트</h3>

      {/*포트폴리오 작성 폼 */}
      <form className={styles.portfolioWrite__form}>
        <input
          className={styles.portfolioWrite__form__title}
          placeholder="제목을 입력하세요"
        ></input>

        <label htmlFor="role">
          담당역할
          <FormInput placeholder="백엔드" />
        </label>

        <label htmlFor="stack">
          사용스택
          <FormInput placeholder="Spring" />
          <SearchIcon bgc="var(--text-color2)" />
        </label>

        <div className={styles.portfolioWrite__form__tasks}>
          <label htmlFor="tasks">이번 주 한 일</label>
          <FormInput
            textarea={true}
            type="textarea"
            width="1117px"
            placeholder=" "
            height="90px"
          />
        </div>

        <div>
          <label htmlFor="difficult">발생한 문제 / 어려움</label>
          <FormInput
            textarea={true}
            placeholder=" "
            width="544px"
            height="200px"
          />
        </div>

        <div>
          <label htmlFor="result">해결 방법</label>
          <FormInput
            textarea={true}
            placeholder=""
            width="544px"
            height="200px"
          />
        </div>

        <div className={styles.portfolioWrite__form__thoughts}>
          <label htmlFor="thoughts">새로 알게된 점 / 깨달은 점</label>
          <FormInput
            textarea={true}
            placeholder=""
            width="1117px"
            height="195px"
          />
        </div>

        {/*폼 제출 버튼*/}
        <div className={styles.portfolioWrite__form__btnWrap}>
          <Button text="삭제" type="SEC_120x40" />
          <Button text="저장" type="MC2_120x40" />
        </div>
      </form>
    </div>
  );
};

export default PortfolioWrite;
