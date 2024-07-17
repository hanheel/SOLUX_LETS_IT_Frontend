//import Button from "../Button/Button";
import CollabLink from "../CollabLink/CollabLink";
import styles from "./CollabLinkForm.module.css";

const CollabLinkForm = ({ type, links, onChange, onClick }) => {
  return (
    <div className={styles.collabLinkForm}>
      <div className={styles.collabLinkForm__label}>협업툴 링크</div>
      <div
        className={`${styles.collabLinkForm__linkItem} ${
          styles[`collabLinkForm__linkItem--${type}`]
        }`}
      >
        {links.map((link, index) => (
          <CollabLink
            key={index}
            id={link.id}
            value={link.link}
            init={link.tool}
            onChange={onChange}
            onClick={onClick}
          />
        ))}
      </div>
      {/*<div className={styles.collabLinkForm__button}>
        <Button text="+ 추가" type="NONE__TEXT-TC2" />
      </div>*/}
    </div>
  );
};

export default CollabLinkForm;
