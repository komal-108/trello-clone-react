import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function HomePopup(closePopup){
    console.log(closePopup);
    const [commonPopup , setCommonPopup] = useState(false);

    function handleCommonPopup(){
        setCommonPopup(!commonPopup);

    }
    return(
        <div className="common_popup">
            <div className="pp_head">
                <p>List Actions</p>
                <IoClose onClick={handleCommonPopup}/>
            </div>
            <div className="box1">
                <ul className="common_list">
                    <li>Add card...</li>
                     <li>Copy list...</li>
                    <li>Move list...</li>
                    <li>Watch</li>

                </ul>
            </div>
            <div className="box2">
                <h5>Automation</h5>
                <ul className="common_list">
                    <li>When a crad is added to the list...</li>
                    <li>Every day, sort list by...</li>
                    <li>Every Monday, sort list by...</li>
                    <li>Create a rule</li>
                </ul>
            </div>
            <div className="box3">
                <ul className="common_list">
                    <li>Move all cards in the list...</li>
                    <li>Archive all cards in the list</li>
                </ul>
            </div>
            <p>Archive this list</p>
        </div>
    );
}