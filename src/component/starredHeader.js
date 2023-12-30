import { useState } from "react";
import { useRef} from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Starred(){
    const[popup , setPopup] = useState(false);
    function handlePopup(){
        setPopup(!popup);
    }
    const starredPopupRef = useRef(null);
    const handleClickOutside = (event) => {
      if (starredPopupRef.current && !starredPopupRef.current.contains(event.target)) {
        setPopup(false);
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return(
        <div className="drop_down" onClick={handlePopup} ref={starredPopupRef}>
              <h5>Starred</h5>
              <FaChevronDown  style={{height:'14px'}}/>
              {popup && (
                <div className="starred_popup_container">
                    <img src="/images/starred-banner.svg" alt=""></img>
                    <p className="starred_text">Star important boards to access them quickly and easily.</p>
                </div>
              )}
        </div>
    );
}