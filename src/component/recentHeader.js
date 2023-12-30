import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRef} from "react";
import { useEffect } from "react";
export default function Recent() {
  const [popup, setPopup] = useState(false);
  function handleRecentPopup() {
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
    <div className="drop_down"  ref={popupRef}>
      <div className="click_div" onClick={handleRecentPopup}>
        <h5>Recent</h5>
        <FaChevronDown style={{height:'14px'}} />
      </div>

      {popup && (
        <div className="recent_popup_container">
          <div className="recent_left"></div>
          <div className="recent_right">
            <h4>My Trello board</h4>
            <p>Komal's Workspace</p>
          </div>
        </div>
      )}
    </div>
  );
}
