import RouteName from '../../Components/RouteName/RouteName';
import SideNav from '../../Components/SideNav/SideNav';
import Header from '../../Components/Header/Header';
import styles from './SearchProject.module.css';
import SearchProjectNav from '../../Components/SearchProject/SearchProjectNav';

const sidenavCont = ['전체 프로젝트', '지역별 프로젝트', '분야별 프로젝트', '네 맞춤 프로젝트'];
const route = ['프로젝트 찾기', '전체 프로젝트'];

const SearchProject = () => {
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
                        <SearchProjectNav />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchProject