import { useState } from "react";

const useHover = () => {
  //mouseEnter, mouseLeave시 hover state 설정
  const [ishovered, setIsHovered] = useState(false);
  //어떤 ul이 hover됐는지에 따라 나타나는 subNav가 다름
  const [activeditem, setActivedItem] = useState(false);
  const handleMouseEnter = (menu) => {
    setActivedItem(menu);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return { ishovered, activeditem, handleMouseEnter, handleMouseLeave };
};

export default useHover;
