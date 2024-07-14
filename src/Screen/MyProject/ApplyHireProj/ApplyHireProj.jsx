import { useState } from "react";
import Button from "../../../Components/Button/Button";
import RouteName from "../../../Components/RouteName/RouteName";
import SideNav from "../../../Components/SideNav/SideNav";
import ApplicantBtn from "./ApplicantBtn/ApplicantBtn";
import styles from "./ApplyHireProj.module.css";
import MemberView from "./MemberView/MemberView";

const route = ["내 프로젝트", "구인/신청 프로젝트"];
const sidenavCont = ["구인/신청 프로젝트", "참여 프로젝트", "스크랩"];

const ApplyHireProj = () => {
  //클릭하면 팀원을 보여주도록 state 설정
  const [showMember, setShowMember] = useState(false);
  const clickMember = () => {
    setShowMember(!showMember);
  };
  console.log(showMember);

  return (
    <div className={styles.ApplyHireProj__content}>
      {/*구인 중인 프로젝트 + 신청한 프로젝트 */}

      {/*구인중인 프로젝트*/}
      <div className={styles.HireProj__contWrap}>
        {/*제목 */}
        <div className={styles.ApplyHireProj__title}>구인중인 프로젝트</div>
        {/*프로젝트 구인글 + 버튼 + 신청자 목록 (컨텐츠) */}
        <div className={styles.HireProj__content}>
          {/*(대체 예정)프로젝트 컴포넌트 + 모집 마감/팀원/글삭제 버튼 + 팀원*/}
          <div className={styles.HireProj__ProjectSetting}>
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
            <div className={styles.HireProj__buttonWrap}>
              <Button text="모집 마감" />
              <Button text="팀원" type="SEC_70x40" onClick={clickMember} />
              <Button text="글 삭제" type="NONE__TEXT-TC2" />
            </div>

            {/*프로젝트 팀원창 */}
            {showMember && <MemberView />}
          </div>

          {/*프로젝트 신청자*/}
          <div className={styles.HireProj__Applicant}>
            <ApplicantBtn />
            <ApplicantBtn />
            <ApplicantBtn />
          </div>
        </div>
      </div>

      <div className={styles.ApplyProj__contWrap}>
        <div className={styles.ApplyHireProj__title}>신청한 프로젝트</div>
        {/*프로젝트 구인글 + 버튼 + 신청자 목록 (컨텐츠) */}
        <div className={styles.ApplyProj__content}>
          <div className={styles.ApplyProj__ProjectList}>
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
            <div
              className="Project_Component"
              style={{
                width: "315px",
                height: "240px",
                backgroundColor: "var(--select-color)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHireProj;
