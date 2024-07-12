// ArrowRightIcon.jsx
const ArrowIcon = ({width='25px',height='25px', className=''}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="var(--main-color2)"
    className={className}
    width={width}
    height={height}
    style={{display: 'inline-block', marginLeft: '10px', marginRight: '10px'}}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export default ArrowIcon;
