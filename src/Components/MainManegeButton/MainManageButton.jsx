import  { useState } from 'react';
import styles from './MainManageButton.module.css';
import Logo from '../../Image/Logo.svg?react';
import SearchIcon from '../../Image/Icons/SearchIcon';

const MainManageButton= () => {
    
    return (
        <div>
            <div className={styles.triangle}></div>
            <div className={styles.nav}>
                <div className={styles.box}><button>신청한 프로젝트</button></div>
                <div className={styles.box}><button>스크랩한 프로젝트</button></div>
                <div className={styles.box}><button>진행중인 프로젝트</button></div>
                <div className={styles.box}><button>프로젝트 신청자 관리</button></div>
                <div className={styles.box}><button>포트폴리오 관리</button></div>
                <div className={styles.box}><button>프로필 관리</button></div>
            </div>
        </div>
        // eslint-disable-next-line react/jsx-key
        
    
    );
};

export default MainManageButton;