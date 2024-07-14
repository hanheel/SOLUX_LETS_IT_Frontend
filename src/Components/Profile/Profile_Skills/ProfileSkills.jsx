import GraphBar from "../../Graph/GraphBar";
import styles from "./ProfileSkills.module.css";

const ProfileSkills = ({ skills }) => {
  const skillsInform = Object.entries(skills);
  //skills 객체 배열로 전환

  return (
    <div className={styles.myProfile__skills}>
      <div className={styles.myProfile__title}>
        SKILLS
        <div className={styles.myProfile__skills__graphWrap}>
          {/*name - 스킬명, score- 스킬 점수 */}
          {skillsInform.map(([name, score], key) => (
            <div className={styles.myProfile__skills__graph} key={key}>
              {/*스킬명*/}
              <div className={styles.myProfile__skills__graphName}>{name}</div>

              {/*스킬 그래프 및 수치 표시*/}
              <GraphBar
                width="500px"
                border="none"
                bgc="var(--sub-color2)"
                color="var(--text-color2)"
                top="0"
                right="-20px"
                value={score}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;
