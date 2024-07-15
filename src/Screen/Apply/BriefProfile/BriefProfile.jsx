import PersonalDetail from "../../../Components/Profile/Profile_Info/Profile_PersonalDetail/PersonalDetail";
import ProfilePhoto from "../../../Components/Profile/Profile_Info/Profile_Photo/ProfilePhoto";
import styles from "./BriefProfile.module.css";
const BriefProfile = ({ user }) => {
  return (
    <div className={styles.briefProfile}>
      <ProfilePhoto />
      {/*이름, 나이 */}
      <div className={styles.briefProfile__text}>
        <PersonalDetail name={user.name} age={user.age} />
        {/*바이오*/}
        <div className={styles.briefProfile__bio}>{user.bio}</div>
      </div>
    </div>
  );
};

export default BriefProfile;
