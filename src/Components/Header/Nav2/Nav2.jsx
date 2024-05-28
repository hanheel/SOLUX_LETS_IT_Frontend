import { useState } from 'react';
import styles from './Nav2.module.css';

const Nav2 = () => {
    const subNavCont = {
        '프로젝트 찾기': ['전체 프로젝트', '지역으로 찾기', '분야로 찾기', '내 맞춤 프로젝트'],
        '내 프로젝트': ['구인 중인 프로젝트', '진행 중인 프로젝트', '스크랩한 프로젝트'],
        '마이페이지': []
    };

    const [hoverState, setHoverState] = useState({
        '프로젝트 찾기': false,
        '내 프로젝트': false,
        '공모전/뉴스레터': false,
        '렛츠IT 커뮤니티': false
    });

    const handleMouseEnter = (menu) => {
        setHoverState(prevState => ({
            ...prevState,
            [menu]: true
        }));
    };

    const handleMouseLeave = (menu) => {
        setHoverState(prevState => ({
            ...prevState,
            [menu]: false
        }));
    };

    return (
        <div className={styles.Nav2Wrap}>
            <div className={styles.Nav2Cont}>
                {['프로젝트 찾기', '내 프로젝트', '공모전/뉴스레터', '렛츠IT 커뮤니티']
                    .map((menu, id) => (
                        <div key={id} onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={() => handleMouseLeave(menu)}>
                            <button>{menu}</button>
                            {hoverState[menu] && subNavCont[menu] && (
                                <ul className={styles.subNavWrap}>
                                    {subNavCont[menu].map((item, itemId) => <li key={itemId}>{item}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Nav2;