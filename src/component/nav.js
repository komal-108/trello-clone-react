import Switcher from "./switcherHeader";
import QuestionHeader from './quesHeader';
import Create from "./createHeader";
import { IoSearchOutline } from "react-icons/io5";
import Workspace from "./WorkspaceHeader";
import Starred from "./starredHeader";
import Recent from "./recentHeader";
import TemplateHeader from "./templatesHeader";
import NotificationHeader from "./notificationHeader";

export default function NavBar(){
    return(
        <div className="header navbar">
          <div className="header_left">
            <Switcher />
            <div className="drop_down">
              <h3>Trello</h3>
            </div>
            <Workspace />
            <Recent />
            <Starred />
            <TemplateHeader />
            <Create />
          </div>
          <div className="header_right">
            <div className="search_input_div">
                <IoSearchOutline />

                <input type="text" placeholder="Search" className="search_input"></input>

            </div>
            <NotificationHeader />
            <QuestionHeader />
          </div>
        </div>
    );
}