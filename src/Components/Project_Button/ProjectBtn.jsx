import Button from '../Button/Button'
import styles from './ProjectBtn.module.css'
import PortfolioBtnPhoto from './ProjectBtnPhoto'

//mock data
const project = {
    name: '학원 정산 청구 서비스'
}
const ProjectBtn = ({
    //포트폴리오 작성, 삭제 버튼을 보여줄 것인가
    buttonShow = true
})=>{
    return(
        <div className={styles.PortfolioBtn__box}>
            {/*프로젝트명 */}
            <div className={styles.PortfolioBtn__title}>
                {project.name}
            </div>

            {/*프로젝트 참석자 프로필 사진 */}
            <div className={styles.PortfolioBtn__photo}>
                <div className={styles.member1}><PortfolioBtnPhoto /></div>
                <div className={styles.member2}><PortfolioBtnPhoto /></div>
                <div className={styles.member3}><PortfolioBtnPhoto /></div>
            </div>

            {/*포트폴리오 작성,삭제 버튼 */}
            {buttonShow? (
                <div className={styles.PortfolioBtn__button}>
                <Button text='작성하기'/>
                <Button 
                color='var(--text-color2)' 
                bgc='var(--line-color)' 
                width='120px'
                text='삭제'/>
                </div>
            ): null
                
}

        </div>
    )
}

export default ProjectBtn