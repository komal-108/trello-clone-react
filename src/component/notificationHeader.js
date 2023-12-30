import { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { useRef} from "react";
import { useEffect } from "react";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
export default function NotificationHeader() {
  const [popup, setPopup] = useState(false);
  function handleNotificationPopup() {
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
    <div className="main_template" ref={popupRef}>
      <div className="drop_down" onClick={handleNotificationPopup}>
        <FaBell />
      </div>
      {popup && (
        <div className="notification_popup_container" >
            <div className="notification_top">
                <h4>Notification</h4>
                <p>Only show unread</p>
                <HiMiniEllipsisVertical />
            </div>
            <div className="notification_bottom">
                <img src="/images/notification.svg" alt=""></img>
                <h4 className="notification_text">No Notification</h4>
            </div>
        </div>
      )}
    </div>
  );
}
