import { useSetAtom } from "jotai";
import { useSearch } from "../../Hooks/useSearch";
import SearchIcon from "../../Image/Icons/SearchIcon";
import { Field } from "../../Screen/Field";
import styles from "./SearchField.module.css";
import { postProjectAtom } from "../../atoms/atoms";
import { useEffect } from "react";
import GrayBox from "../../Components/SearchProject/GrayBox";

const SearchField = () => {
  /* 프로젝트 search 훅 */
  const {
    isFocus,
    handleFocus,
    handleBlur,
    handleSearch,
    handleCreateBox,
    deleteGrayBox,
    data,
    tech,
  } = useSearch(Field);
  
  /* 백엔드에 보낼 데이터에 push */
  const setPostProj = useSetAtom(postProjectAtom);
  
  useEffect(() => {
    // tech가 변경될 시 백엔드에 보낼 데이터 재렌더링
    setPostProj((prev) => ({
      ...prev,
      field: [...tech], // field 상태를 배열 형태로 저장
    }));
  }, [tech, setPostProj]);

  return (
    <div className={styles.projectHire__requiredStack}>
      <div className={styles.projectHire__subTitle}>개발 분야</div>
      <div className={styles.projectHire__detail}>
        <input
          name="field"
          onChange={handleSearch}
          className={styles.projectHire__inputStyle2}
          placeholder="프론트엔드"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className={styles.projectHire__searchIcon}>
          <SearchIcon />
        </div>
        {isFocus && (
          <ul className={styles.projectHire__relatedSearch}>
            {/* 미리 필터링된 데이터 중 일부만 연관검색어에 보여줌 */}
            {data.slice(0, 5).map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleCreateBox(item)}
                className={styles.projectHire__relatedSearchItem}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* 만들어진 graybox wrap */}
      <div className={styles.projectHire__techWrap}>
        {tech.map((item) => (
          <GrayBox
            showX={true}
            onClick={() => deleteGrayBox(item)}
            key={item}
            tech={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchField;