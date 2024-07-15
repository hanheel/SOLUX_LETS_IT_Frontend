import { useRef, useState } from "react";

const HeartIcon = ({ width = "24px", height = "24px" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const iconRef = useRef();
  const onClickHeart = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      iconRef.current.style.stroke = "#FF5E8E";
      iconRef.current.style.fill = "#FF5E8E";
    } else {
      iconRef.current.style.stroke = "var(--text-color2)";
      iconRef.current.style.fill = "transparent";
    }
  };
  return (
    <svg
      ref={iconRef}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="var(--text-color2)"
      className="size-6"
      width={width}
      height={height}
      onClick={onClickHeart}
      cursor={"pointer"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
};

export default HeartIcon;
