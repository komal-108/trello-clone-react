import { IoClose } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";

export default function InputPopupComponent({setInputPopup, cardItem}) {

  const closePopup = () => {
    setInputPopup(false)
  }
  console.log(cardItem);
  return (
    <div className="popup">
      <div className="popup_content">
        <div className="popup_header">
          <div className="pp_left">
            <MdOutlineLaptopChromebook style={{ width: 29, height: 37 }} />
            <input className="card_input_value" value={cardItem}></input>
          </div>
          <IoClose className="close_btn" onClick={closePopup} />
        </div>
      </div>
    </div>
  );
}
