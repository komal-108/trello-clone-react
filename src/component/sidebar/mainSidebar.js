import { AiOutlineLeft } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { AiTwotoneProfile } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import React, { useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function Sidebar() {
  const [isOpen, setIsopen] = useState(true);
  const ToggleSidebar = () => {
    setIsopen(!isOpen);
  };
  console.log(isOpen);
  const [workSetting, setWorkSetting] = useState(false);
  const [calender, setCalender] = useState(false);
  const [board, setboard] = useState(false);

  function handleWorkSetting() {
    setWorkSetting(!workSetting);
  }
  function handleCalender() {
    setCalender(!calender);
  }
  function handleBoard() {
    setboard(!board);
  }
  return (
    <>
      {isOpen ? (
        <div className="sidebar">
          <div className="workspace_div">
            <div className="wk_div">
              <button className="workspace_button">K</button>
              <div className="work_text">
                <p>Komal's workspace</p>
                <p>Free</p>
              </div>
            </div>

            <AiOutlineLeft
              style={{ height: "14px" }}
              className="sideIcon"
              onClick={ToggleSidebar}
            />
          </div>
          <div className="workspace_list">
            <ul>
              <li className="template_list template_text">
                <BiSolidBookContent />
                <p>Boards</p>
              </li>
              <li className="template_list template_list1">
                <div className="template_text">
                  <AiOutlineUser />
                  <p>Members</p>
                </div>

                <AiOutlinePlus />
              </li>
              <li
                className="template_list template_list1"
                onClick={handleWorkSetting}
              >
                <div className="template_text">
                  <AiTwotoneSetting />
                  <p>Workspace Setting</p>
                </div>
                <FaChevronDown className="icon" style={{ height: "14px" }} />
              </li>
              {workSetting && (
                <div className="worksetting_popup">
                  <p>Workspace Settings</p>
                  <p>Upgrade Workspace</p>
                </div>
              )}
            </ul>
          </div>
          <div className="workspace_views" onClick={handleCalender}>
            <h6>Workspace views</h6>
            <div className="calender">
              <AiTwotoneProfile
                style={{ color: "white" }}
                className="calender_icon"
              />
              <p>Calender</p>
            </div>
          </div>
          {calender && (
            <div className="calender_popup">
              <div className="calender_content cln">
                <p>Calender</p>
                <AiOutlineClose onClick={handleCalender} className="close" />
              </div>
              <div className="calender_content cln2">
                <IoTrashBinOutline />
                <p className="rmv">Remove View</p>
              </div>
            </div>
          )}
          <div className="boards_container" onClick={handleBoard}>
            <div className="boards">
              <p>Your Boards</p>
              <AiOutlinePlus />
            </div>
            <div className="board_down">
              <div className="recent_left box"></div>
              <p>My Trello board</p>
            </div>
          </div>
          {board && (
            <div className="calender_popup board_popup">
              <div className="calender_content cln">
                <p>My Trello Board</p>
                <AiOutlineClose onClick={handleBoard} className="close" />
              </div>
              <div className="calender_content cln">
                <p className="close">Close</p>
                <FaChevronRight />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="sidebar_right">
           <BsChevronRight className="right_arrow" style={{width : 50, color : "white",}} onClick={ToggleSidebar} />
        </div>
          // <AiOutlineLeft style={{width : 50, color : "black"}}/>
      )}
    </>
  );
}
