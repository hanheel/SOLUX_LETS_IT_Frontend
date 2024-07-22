import { useState } from "react";
import ArrowTurnDownRight from "../../../Image/Icons/ArrowTurnDownRight";
import EllipsisHorizontalIcon from "../../../Image/Icons/EllipsisHorizontalIcon";
import HeartIcon from "../../../Image/Icons/HeartIcon";
import UserCircleIcon from "../../../Image/Icons/UserCircleIcon";
import styles from "./CommentItem.module.css";
import Button from "../../../Components/Button/Button";

const CommentItem = ({
  id,
  writer,
  date,
  description,
  postWriter,
  inputRef,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPostWriter = () => postWriter === writer;

  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };

  const onClickReply = () => {
    inputRef.current.focus();
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className={styles.CommentItem}>
      {isOpen && (
        <div className={styles.CommentItem__menu}>
          <Button text="수정" type="NONE__TEXT-TC2" />
          <Button text="삭제" type="NONE__TEXT-TC2" onClick={onClickDelete} />
        </div>
      )}
      <UserCircleIcon
        color={isPostWriter() ? "var(--main-color2)" : "var(--text-color2)"}
      />
      <div
        className={`${styles.CommentItem__container} ${
          isPostWriter() ? styles.CommentItem__container__WRITER : ""
        }`}
      >
        <div className={styles.CommentItem__header}>
          <div>{writer}</div>
          <div>{date}</div>
          {isPostWriter() && (
            <div className={styles.CommentItem__icon} onClick={onClickIcon}>
              <EllipsisHorizontalIcon />
            </div>
          )}
        </div>
        <div className={styles.CommentItem__description}>{description}</div>
        <div className={styles.CommentItem__icon}>
          <HeartIcon />
          <ArrowTurnDownRight onClick={onClickReply} />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
