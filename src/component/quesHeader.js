import { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { useRef} from "react";
import { useEffect } from "react";
export default function QuestionHeader(){
    const [popup , setPopup] = useState(false);
    function handleQuesPopup(){
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
        <div className="ques_main" ref={popupRef}>
            <GoQuestion onClick={handleQuesPopup}/>
            {popup && (
                <div className="ques_popup_container" >
                    <div className="ques_div">
                        <img src="/images/ques.meadia.png" alt="" className="ques_media"></img> 
                    </div>
                    <div className="ques_content">
                       <h5 className="ques_heading">Make boards more powerful with trello Power-UPs</h5>
                   <a href="#" className="ques_anchor">Get a new tip</a>
                   <div className="list_main">
                     <ul className="ques_list">
                    <li>Pricing</li>
                    <li>Apps</li>
                    <li>Blogs</li>
                    <li>Privacy</li>
                    <li>Notice At Collection</li>
                    <li>More...</li>
                    </ul> 
                   </div>
                  
                    </div> 
                   
                </div>
            )}
        </div>
    );
}