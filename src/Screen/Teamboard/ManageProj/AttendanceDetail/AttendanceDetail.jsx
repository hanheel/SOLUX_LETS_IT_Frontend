import { useContext } from "react";
import Button from "../../../../Components/Button/Button";
import MemberItem from "../../../../Components/MemberItem/MemberItem";
import { TeamDispatchContext, TeamStateContext } from "../../Teamboard";
import styles from "./AttendanceDetail.module.css";

const AttendanceDetail = () => {
  const teamData = useContext(TeamStateContext);
  const members = teamData.members;
  const meetings = teamData.meetingLog;
  const { onSaveMeeting } = useContext(TeamDispatchContext);

  const onClickSave = () => {
    onSaveMeeting({
      date: new Date().toISOString().split("T")[0],
      nonParticipants: ["tom"],
      proofImages: "third_week.png",
    });
  };

  return (
    <div className={styles.attendanceDetail}>
      <div className={styles.attendanceDetail__container}>
        <div className={styles.attendanceDetail__label}>
          <span>{meetings.length + 1} 번째</span> 회의 인증
        </div>
        <div className={styles.attendanceDetail__file}>
          <div className={styles.attendanceDetail__fileLabel}>
            <div className={styles.attendanceDetail__fileName}>
              this_week.png
            </div>
            <div className={styles.attendanceDetail__countLabel}>
              참여인원 3 | 불참인원 1
            </div>
          </div>
          <Button text="첨부파일" type="SEC_80x30" />
        </div>
        <div className={styles.attendanceDetail__list}>
          <div className={styles.attendanceDetail__listLabel}>불참한 팀원</div>
          <div className={styles.attendanceDetail__members}>
            {members.map((member) => (
              <MemberItem key={member.id} memberName={member.name} />
            ))}
          </div>
        </div>
        <div className={styles.attendanceDetail__button}>
          <Button text={"저장"} type={"MC2_120x40"} onClick={onClickSave} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetail;
