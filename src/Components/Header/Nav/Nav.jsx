import  { useState } from 'react';
import styles from './Nav.module.css';
import Logo from '../../../Image/Logo.svg?react';
import SearchIcon from '../../../Image/Icons/SearchIcon';
import BellIcon from '../../../Image/Icons/BellIcon';

const Nav = () => {
    // eslint-disable-next-line react/jsx-key
    const navCont = ['로그아웃', '마이페이지', <BellIcon />];

    const [hoverState, setHoverState] = useState({
        '마이페이지': false,
    });

    const subNavCont = {
        '마이페이지': ['프로필 관리', '포트폴리오 관리', '개인정보 수정'],
    };

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
        <div className={styles.nav}>
            <div className={styles.nav__container}>
                <Logo width="90px" height="50px" />
                <div className={styles.nav__searchBar_container}>
                    <div className={styles.nav__searchBar}>
                    <input
                        className={styles.nav__searchbar_input}
                        placeholder="프로젝트부터 포트폴리오까지!">                     
                    </input>
                    <button className={styles.nav__searchIcon}><SearchIcon /></button>
                    </div>
                </div>
                {navCont.map((menu, id) => (
                    <div
                        className={styles.nav__contents}
                        key={id}
                        onMouseEnter={() => handleMouseEnter(menu)}
                        onMouseLeave={() => handleMouseLeave(menu)}
                    > {/*mouse enter / leave에 따라 서브네비게이터가 작동되도록 함*/}

                        <button className={styles.nav__button}>
                            {menu}
                        </button>
                        {/*네비게이터 버튼*/}

                        {hoverState[menu] && subNavCont[menu] && (
                            <ul className={styles.nav__subnav}>
                                {subNavCont[menu].map((item, itemId) => (
                                    <li key={itemId} className={styles.nav__subnav_item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        
                        )}
                        {/*네비게이터 서브 버튼*/}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav;
