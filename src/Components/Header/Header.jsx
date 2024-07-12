import Nav from "./Nav/Nav"
import Nav2 from "./Nav2/Nav2"
import styles from './Header.module.css'

const Header =()=>{
    return <div className={styles.header}>
        <Nav />
        <Nav2 />
    </div>
}

export default Header