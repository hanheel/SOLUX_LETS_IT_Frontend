
import RouteName from '../../../Components/RouteName/RouteName'
import SideNav from '../../../Components/SideNav/SideNav'
import styles from './MyProfile.module.css'

const sidenavCont = ['프로필 관리','포트폴리오 관리','개인정보 수정']
const route = ['마이페이지','프로필 관리']

const MyProfile = ()=>{
    return(
        <div className={styles.myprofile}>
        <RouteName route={route}/>
            <div className={styles.myprofile__content}>
                <SideNav content={sidenavCont}/>
                MyProfile 
           
            </div>
        </div>
    )
}

export default MyProfile