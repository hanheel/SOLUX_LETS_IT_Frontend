import styles from './SideNav.module.css'

//상위 컴포넌트에서 props로 해당 네비게이터에 들어갈 data를 전달
//ex. content = ['프로젝트 관리','포트폴리오 관리','개인정보 수정']
//반드시 '배열'로 전달

const SideNav = ({content})=>{
    return(
        <div className={styles.sidenav}>
            <ul className={styles.sidenav__container}>
                {content.map((item,index)=> <li className={styles.sidenav__item} key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default SideNav