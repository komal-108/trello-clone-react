import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
export default function Switcher() {
  const [switcher, setSwitcher] = useState(false);
  function handleSwitcher() {
    setSwitcher(!switcher);
  }
  console.log(switcher);
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setSwitcher(!switcher);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="switcher_container">
      <div className="drop_down">
        <img src="/images/switcher.png" alt="" onClick={handleSwitcher}></img>
      </div>
      {switcher && (
        <div className="main">
          <div className="switcher_header">
            <h4>Switch To</h4>
            <div className="box">
              <h4 className="heading">Atlassian Start</h4>
              <img src="/images/external-link.png" alt=""></img>
            </div>
          </div>
          <div className="logo_div">
            <img src="/images/trello-logo.svg" className="logo" alt=""></img>
            <p>Trello</p>
          </div>
          <div className="switcher_content">
            <p className="para">Recommende for your team</p>
            <div className="recommended_services">
              <div className="services_left">
                <div className="service_icon">
                  <img
                    src="/images/service-1.svg"
                    alt=""
                    className="service_image"
                  ></img>
                </div>
                <div className="service_text">
                  <h5>Jira Service Management</h5>
                  <h6>collaborative IT Service Management</h6>
                </div>
              </div>
              <div className="services_right">
                <img src="/images/dots.png" className="down_arrow" alt=""></img>
              </div>
            </div>
            <div className="recommended_services">
              <div className="services_left">
                <div className="service_icon">
                  <img
                    src="/images/service-3.svg"
                    alt=""
                    className="service_image"
                  ></img>
                </div>
                <div className="service_text">
                  <h5>Jira Product Discovery</h5>
                  <h6>collaborative IT Service Management</h6>
                </div>
              </div>
              <div className="services_right">
                <img src="/images/dots.png" className="down_arrow" alt=""></img>
              </div>
            </div>
            <div className="recommended_services">
              <div className="services_left">
                <div className="service_icon">
                  <img
                    src="/images/service-1.svg"
                    alt=""
                    className="service_image"
                  ></img>
                </div>
                <div className="service_text">
                  <h5>Jira Product Discovery</h5>
                  <h6>collaborative IT Service Management</h6>
                </div>
              </div>
              <div className="services_right">
                <img src="/images/dots.png" className="down_arrow" alt=""></img>
              </div>
            </div>
            <div className="recommended_services_last">
              <div className="services_left">
                <div className="service_icon">
                  <img
                    src="/images/service-1.svg"
                    alt=""
                    className="service_image"
                  ></img>
                </div>
              </div>
              <div className="services_right">
                <p>More Atlassian Products</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
