import Sidebar from "./sidebar/mainSidebar";
import Home from "./HomePage";
import NavBar from "./nav";
export default function MainPage() {
  return (
    <div className="home_page">
        <NavBar />
        <div className="home_container_main">
          <div className="home_left">
          <Sidebar />
          </div>
          <div className="home_right">
          <Home />
          </div>
        </div>
        
        
    </div>
  );
}
