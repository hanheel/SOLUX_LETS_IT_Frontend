const Button = ({
    //props로 width,height,배경색,border Radius 전달
    width = '150px',
    height = '40px',
    bgc = 'var(--main-color2)',
    borderRadius='4px',
    border='none',

    //button에  표시할 텍스트, 텍스트 색깔, 폰트 설정
    text='add text',
    color='#fff',
    fontFamily = 'pretendardB',
    fontSize = '16px'})=>{
    
        return(
        <button style={{
            width: width,
            height: height,
            backgroundColor: bgc,
            borderRadius: borderRadius,
            color: color,
            fontFamily: fontFamily,
            fontSize : fontSize,
            border: border,

            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>{text}</button>
    )
}

export default Button