import ArrowTurnDownRight from "../../../Image/Icons/ArrowTurnDownRight";
import HeartIcon from "../../../Image/Icons/HeartIcon";
import UserCircleIcon from "../../../Image/Icons/UserCircleIcon";
import styles from "./CommentItem.module.css";

const CommentItem = ({ writer, date, description }) => {
  return (
    <div className={styles.CommentItem}>
      <UserCircleIcon />
      <div className={styles.CommentItem__container}>
        <div className={styles.CommentItem__header}>
          <div>{writer}</div>
          <div>{date}</div>
        </div>
        <div className={styles.CommentItem__description}>{description}</div>
        <div className={styles.CommentItem__icon}>
          <HeartIcon />
          <ArrowTurnDownRight />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
