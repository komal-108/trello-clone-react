import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
export default function TemplateHeader() {
  const [popup, setPopup] = useState(false);
  const [template, setTemplate] = useState(true);

  function handlePopup() {
    setPopup(!popup);
  }
  function handleTemplates() {
    setTemplate(!template);
  }
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopup(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="main_template" ref={popupRef}>
      <div className="drop_down" onClick={handlePopup}>
        <h5>Templates</h5>
        <FaChevronDown style={{height:'14px'}}/>
      </div>
      {popup && (
        <div className="templatePopupContainer" >
          <div className="template_top">
            <p>Top template</p>
            <FaChevronDown onClick={handleTemplates} />
          </div>
          {template && (
            <ul className="template_ul_list">
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-photo.jpg"
                alt=""
              ></img>
              <p>1-on-1 Meeting Agenda</p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-2.jpg"
                alt=""
              ></img>
              <p>Company Overview</p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-3.jpg"
                alt=""
              ></img>
              <p>Agile Board Template </p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-2.jpg"
                alt=""
              ></img>
              <p>Company Overview</p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-photo.jpg"
                alt=""
              ></img>
              <p>1-on-1 Meeting Agenda</p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-3.jpg"
                alt=""
              ></img>
              <p>Agile Board Template </p>
            </li>
            <li className="template_list">
              <img
                className="template_image"
                src="/images/template-2.jpg"
                alt=""
              ></img>
              <p>Company Overview</p>
            </li>
          </ul>
          )}
          <div className="template_bottom">
            <div className="template_info">
              <BiSolidBookContent style={{color: "blue"}} className="template_icon" />
              <p>See hundreds of templates from the Trello community</p>
            </div>
            <button  className="template_button">Explore templates</button>
          </div>
        </div>
      )}
    </div>
  );
}
