import { useState } from "react";
import { useRef} from "react";
import { useEffect } from "react";
export default function Create(){
    const [popup , setPopup] = useState(false);
    function handleCreatePopup(){
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
    return(
        <div className="drop_down" ref={popupRef}>
              <button className="header_create_button" onClick={handleCreatePopup}>Create</button>
              {popup && (
                <div className="create_popup_container" >
                    <div className="create_content_main">
                        <div className="create_text">
                            <div className="upper_text">
                                <img src="/images/layout.png" className="down_arrow"></img>
                                <p className="create_heading">Create Board</p>
                            </div>
                            <p className="create_para">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
                        </div>
                        <div className="create_text">
                            <div className="upper_text">
                                <img src="/images/layout.png" className="down_arrow"></img>
                                <p className="create_heading">Create Workspace</p>
                            </div>
                            <p className="create_para">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
                        </div>
                        <div className="create_text">
                            <div className="upper_text">
                                <img src="/images/group.png" className="down_arrow"></img>
                                <p className="create_heading"> Start with a template</p>
                            </div>
                            <p className="create_para">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
                        </div>
                    </div>
                </div>
              )}
         </div>
    );
}