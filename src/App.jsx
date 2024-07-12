import styles from "./App.module.css";

import MainHome from "./Screen/MainHome/MainHome";
import SearchProject from "./Screen/SearchProject/SearchProject";
import Proj_area from "./Screen/SearchProject/Proj_area";
import Proj_field from "./Screen/SearchProject/Proj_field";
import SearchProjectNav from "./Components/SearchProject/SearchProjectNav";

function App() {
  return (
  <div className={styles.wrap}>
    {/*<MainHome/>*/}
    
    <Proj_field/>
    <div className={styles.spn}><SearchProjectNav/></div>
    
    
    
  
    <div className={styles.main}> 
      
    {/*라우팅 시 outlet이 들어갈 부분*/}
    </div>
  </div>
  )
}

export default App;
