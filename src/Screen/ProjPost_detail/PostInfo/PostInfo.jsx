import CalendarIcon from "../../../Image/Icons/CalendarIcon";
import UserIcon from "../../../Image/Icons/UserIcon";
import styles from "./PostInfo.module.css";
import PlusCircleIcon from "../../../Image/Icons/PlusCircleIcon";
import BookmarkIcon from "../../../Image/Icons/BookmarkIcon";
import CheckIcon from "../../../Image/Icons/CheckIcon";

const PostInfo = ({ post }) => {
  return (
    <div className={styles.PostInfo}>
      <div className={styles.PostInfo__container}>
        <div className={styles.PostInfo__header}>
          <div className={styles.PostInfo__title}>{post.postInfo.title}</div>
          <div className={styles.PostInfo__scrap}>
            <BookmarkIcon />
          </div>
        </div>
        <div className={styles.PostInfo__body}>
          <div className={styles.PostInfo__postInfo}>
            <div>
              <CalendarIcon />
              <div className={styles.PostInfo__subLabel}>모집기간</div>
              {`${post.postInfo.hireDate.startDate} ~ ${post.postInfo.hireDate.endDate}`}
            </div>
            <div>
              <UserIcon />
              <div className={styles.PostInfo__subLabel}>모집인원</div>
              {post.postInfo.hireTO === 0
                ? "미정"
                : post.postInfo.hireTO + "명"}
            </div>
            <div>
              <PlusCircleIcon />{" "}
              <div className={styles.PostInfo__subLabel}>우대사항</div>
              <div className={styles.PostInfo__preferred}>
                {post.postInfo.preferred.map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.PostInfo__projInfo}>
            <div className={styles.PostInfo__label}>프로젝트 정보</div>
            <div className={styles.PostInfo__projInfoDetail}>
              <div>
                <div className={styles.PostInfo__subLabel}>예상 기간</div>
                {`${post.projInfo.expectedPeriod.startDate} ~ ${post.projInfo.expectedPeriod.endDate}`}
              </div>
              <div>
                <div className={styles.PostInfo__subLabel}>진행 방식</div>
                {post.projInfo.meetingType}
              </div>
              <div>
                <div className={styles.PostInfo__subLabel}>지역</div>
                {post.projInfo.area}
              </div>
              <div>
                <div className={styles.PostInfo__subLabel}>난이도</div>
                {post.projInfo.level}
              </div>
            </div>
          </div>
          <div className={styles.PostInfo__skillInfo}>
            <div className={styles.PostInfo__label}>
              필요 스택
              {post.isNegotiable && (
                <span>
                  <CheckIcon
                    color="var(--main-color2)"
                    width="14px"
                    height="14px"
                  />
                  협의 가능
                </span>
              )}
            </div>
            <div className={styles.PostInfo__skill}>
              {post.needSkill.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
            <div
              className={styles.PostInfo__meta}
            >{`${post.postInfo.postedDate} . 조회 ${post.postInfo.hits} . 스크랩${post.postInfo.scrap}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
