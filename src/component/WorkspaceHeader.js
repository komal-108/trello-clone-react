import { useRef, useState } from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
export default function Workspace() {
  const [popup, setPopup] = useState(false);
  function handlePopup() {
    setPopup(!popup);
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
    <div className="drop_down" onClick={handlePopup} ref={popupRef}>
      <h5>Workspace</h5>
      <FaChevronDown
        style={{ height: "14px" }}
      />
      {popup && (
        <div className="workspace_popup_container" >
          <div className="workspace_content upper_ws_content">
            <p className="workspace_type">Current Workspace</p>
            <div className="workspace">
              <button className="workspace_button">K</button>
              <p className="person_workspace">Komal's workspace</p>
            </div>
          </div>
          <div className="workspace_content">
            <p className="workspace_type">Current Workspace</p>
            <div className="workspace">
              <button className="workspace_button">K</button>
              <p className="person_workspace">Komal's workspace</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
