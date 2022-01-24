import styles from '../styles/Home.module.css'
import Profile from "../components/Profile/profile";
import Navbar from "../components/Navbar/navbar";
import Workspace from '../components/Workspace/workspace';
import RightSide from '../components/RightSide/rightside';

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={styles.dashboardContainer}>
        <Profile/>
        <Workspace/>
        <RightSide/>
      </div>
    </>
  )
}
