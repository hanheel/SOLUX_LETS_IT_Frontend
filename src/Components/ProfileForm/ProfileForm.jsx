import Button from "../Button/Button";
import SearchIcon from "../../Image/Icons/SearchIcon";
import styles from "./ProfileForm.module.css";
import SkillRange from "../SkillRange/SkillRange";
import CollabLink from "../CollabLink/CollabLink";

const ProfileForm = () => {
  return (
    <div className={styles.profileForm}>
      <div className={styles.profileForm__infoSection}>
        <div className={styles.profileForm__picture}>
          <img src="" alt="프로필 사진" />
          <Button text="변경하기" type="444444_150x40" />
        </div>
        <div className={styles.profileForm__info}>
          <div className={styles.profileForm__label}>기본 정보</div>
          <div className={styles.profileForm__form}>
            <div className={styles.profileForm__name}>
              <div className={styles.profileForm__formLabel}>이름</div>
              <input type="text" placeholder="ex) 홍길동" />
            </div>
            <div className={styles.profileForm__bio}>
              <div className={styles.profileForm__formLabel}>
                바이오<span>(20자 이내)</span>
              </div>
              <input
                type="text"
                placeholder="ex) 시각화로 소통하는 프론트엔트 개발자"
              />
            </div>
            <div className={styles.profileForm__age}>
              <div className={styles.profileForm__formLabel}>연령대</div>
              <div className={styles.profileForm__ageBox}>20대 초반</div>
            </div>
            <div className={styles.profileForm__sns}>
              <div className={styles.profileForm__formLabel}>SNS</div>
              <div className={styles.profileForm__link}>
                <div>
                  <CollabLink type="SHORT" />
                  <Button text="입력" type="NONE__TEXT-MC2-16" />
                </div>
                <div>
                  <CollabLink type="SHORT" />
                  <Button text="삭제" type="NONE__TEXT-TC2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileForm__introSection}>
        <div className={styles.profileForm__label}>INTRODUCE</div>
        <textarea placeholder="간단한 소개글을 입력해 주세요." />
      </div>
      <div className={styles.profileForm__skillSection}>
        <div className={styles.profileForm__skillsTop}>
          <div className={styles.profileForm__label}>SKILLS</div>
          <div className={styles.profileForm__searchBar}>
            <input type="text" placeholder="ex) JavaScript" />
            <button>
              <SearchIcon width="25px" height="25px" />
            </button>
          </div>
        </div>
        <div
          className={`${styles.profileForm__innerLabel} ${styles["profileForm__innerLabel--POINT"]}`}
        >
          4개까지 추가할 수 있습니다.
        </div>
        <div className={styles.profileForm__innerLabel}>
          <span>기술 스택</span>
          <span>숙련도</span>
        </div>
        <div className={styles.profileForm__skillRange}>
          <SkillRange skillName="React" />
          <SkillRange skillName="JavaScript" />
          <SkillRange skillName="SpringBoot" />
          <SkillRange />
        </div>
      </div>
      <div className={styles.profileForm__save}>
        <Button text="저장" type="RAD-10__FONT-M" />
      </div>
    </div>
  );
};

export default ProfileForm;
