import { useState } from 'react';
import styles from './SearchProjectNav.module.css';
import { Check } from 'react-feather';
import ProjectList from './ProjectList';


const SearchProjectNav = () => {
    const navCont = ['최신순', '스크랩순', '조회순'];
    const OnOff = ['대면', '비대면'];
    const [hoverState, setHoverState] = useState({});

    const projects = [
        { title: '웹 사이드 프로젝트 팀원 모집',
          period: '4월 10일 - 5월 10일',
          location: '서울',
          onoff:'오프라인',
          difficulty: '초급',
          stack: ['react', 'spring', 'R'],
          content: '1안녕하세요, 저희는 숙명여자대학교 IT공학전공 5명으로 구성된 팀입니다. 현재 백엔드 2명, 프론트엔드 2명이 참여 중이며, 프론트엔드 개발자 분을 우선적으로 모집하려고 합니다.',},
          
    
        { title: '앱 사이드 프로젝트 팀원 모집',
          period: '4월 10일 - 5월 10일',
          location: '서울',
          onoff:'오프라인',
          difficulty: '초급' ,
          stack: ['react', 'spring'],
          content: '2안녕하세요, 저희는 숙명여자대학교 IT공학전공 5명으로 구성된 팀입니다. 현재 백엔드 2명, 프론트엔드 2명이 참여 중이며, 프론트엔드 개발자 분을 우선적으로 모집하려고 합니다.',},
        
    
    
        { title: '리액트 프로젝트 팀원 모집',
          period: '4월 10일 - 5월 10일',
          location: '서울',
          onoff:'오프라인',
          difficulty: '초급' ,
          stack: ['react', 'spring'],
          content: '3안녕하세요, 저희는 숙명여자대학교 IT공학전공 5명으로 구성된 팀입니다. 현재 백엔드 2명, 프론트엔드 2명이 참여 중이며, 프론트엔드 개발자 분을 우선적으로 모집하려고 합니다.',},
    
        { title: '딥러닝 프로젝트 팀원 모집',
          period: '4월 10일 - 5월 10일',
          location: '서울',
          onoff:'오프라인',
          difficulty: '초급' ,
          stack: ['react', 'spring'],
          content: '4안녕하세요, 저희는 숙명여자대학교 IT공학전공 5명으로 구성된 팀입니다. 현재 백엔드 2명, 프론트엔드 2명이 참여 중이며, 프론트엔드 개발자 분을 우선적으로 모집하려고 합니다.',},
      ];

    const handleMouseEnter = (menu) => {
        setHoverState((prevState) => ({
            ...prevState,
            [menu]: true,
        }));
    };

    const handleMouseLeave = (menu) => {
        setHoverState((prevState) => ({
            ...prevState,
            [menu]: false,
        }));
    };

    return (
        <div>
        <div className={styles.nav2}>
            <div className={styles.nav2__container}>
                {navCont.map((menu, id) => (
                    <div
                        className={styles.nav2__contents}
                        key={id}
                        onMouseEnter={() => handleMouseEnter(menu)}
                        onMouseLeave={() => handleMouseLeave(menu)}
                    >
                        <button className={styles.nav2__button}>{menu}</button>
                        {id < navCont.length - 1 && <span className={styles.divider}>|</span>}
                    </div>
                ))}
            </div>

            <div className={styles.onoff__container}>
                {OnOff.map((menu, id) => (
                    <div
                        className={styles.onoff__contents}
                        key={id}
                        onMouseEnter={() => handleMouseEnter(menu)}
                        onMouseLeave={() => handleMouseLeave(menu)}
                    >
                        <button className={styles.onoff__button}>{menu}</button>
                    </div>


                ))}
            </div>

            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownGroup}>
            
                    <select>
                        <option value="">난이도</option>
                        <option value="초급">초급</option>
                        <option value="중급">중급</option>
                        <option value="고급">고급</option>
                    </select>
                </div>
                <div className={styles.dropdownGroup}>
                    <select>
                        <option value="">예상 기간</option>
                        <option value="1개월 미만">1개월 미만</option>
                        <option value="1개월~3개월">1개월~3개월</option>
                        <option value="3개월~6개월">3개월~6개월</option>
                        <option value="6개월~1년">6개월~1년</option>
                        <option value="1년 이상">1년 이상</option>
                    </select>
                </div>
                <div className={styles.dropdownGroup}>
                    <select>
                        <option value="">연령대</option>
                        <option value="20대 미만">20대 미만</option>
                        <option value="대학생">대학생</option>
                        <option value="20대">20대</option>
                        <option value="30대">30대</option>
                        <option value="40대 이상">40대 이상</option>
                    </select>
                </div>
                
            </div>
        </div>
        <div className={styles.list}>
                <ProjectList projects={projects}/></div></div>
    );
};

export default SearchProjectNav;
