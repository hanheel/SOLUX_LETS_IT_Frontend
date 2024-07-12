import RouteName from '../../Components/RouteName/RouteName';
import SideNav from '../../Components/SideNav/SideNav';
import Header from '../../Components/Header/Header';
import styles from './Proj_area.module.css';
import Area from '../../Components/SearchProject/Area';

const sidenavCont = ['전체 프로젝트', '지역별 프로젝트', '분야별 프로젝트', '네 맞춤 프로젝트'];
const route = ['프로젝트 찾기', '지역별 프로젝트'];

const Proj_area = () => {
    return (
        <div>
            <Header />
            <div className={styles.searchp}>
                <RouteName route={route} />
                <div className={styles.searchp__content}>
                    <div className={styles.sidenav}>
                        <SideNav content={sidenavCont} />
                    </div>
                    <div className={styles.mainContent}>
                        <Area/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proj_area