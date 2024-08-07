import { useLocation, useParams } from "react-router-dom";
import Profile from "../../../Components/Profile/Profile";
import styles from "./MemberProfile.module.css";
import { useEffect, useState } from "react";
import { getApplyProfile } from "../../../service/profileService";

// //mock user data
// const user = {
//   name: userId,
//   age: "20대 초반",
//   bio: "시각화로 소통하는 주니어 개발자",
//   sns: {
//     gmail: "coderkim123@gmail.com",
//     github: "http://github.com",
//     blog: "htttp://vlog.com",
//   },
//   tierScore: 60,
//   skills: {
//     css: 95,
//     HTML: 80,
//     React: 50,
//     JavaScript: 95,
//   },
//   introduce:
//     "안녕하세요! 저는 프론트엔드 개발자로서 사용자 경험을 끊임없이 개선하고, 풍부한 인터랙션과 시각적 효과를 구현하는 데 열정을 가지고 있는 김코더입니다. 팀 내외에서의 협업을 통해 문제를 해결하고, 새로운 아이디어를 제안하는 것을 즐기며, 항상 자기 계발에 주력합니다. ",
// };

const MemberProfile = () => {
  const location = useLocation();
  const { userId } = location.state;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await getApplyProfile(userId);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.memberProfile}>
      <Profile user={user} type={"INTEAMBOARD"} />
    </div>
  );
};

export default MemberProfile;
