import React from "react"
import img1 from "../images/sima2.png"
import sima2 from "../images/graffiti_inscriptions_art_letters_wall_118776_3840x2400.jpg"

const Sima = () => {
  return (
    <div className="project-container" id="sima">
      <div className="project-title">
        <h2 className="outer">SIMA</h2>
        {/* <h2 className="inner">SIMA SMS</h2> */}
      </div>
      <div className="grid-2">
        <div className="img event-1">
          <div className="img_container">
            <div style={{ width: "100%", paddingBottom: "62%" }}></div>
            <img src={img1} />
          </div>
          <p>
            <a href="" target="_blank">
              Sima
            </a>{" "}
            is a web app for managing school records. A dark theme mode,
            timetable, manage students, staff, and classroom records, mark day
            to day attendance. No external UI components were used, datatable,
            modals/pop ups coded by me
            <span role="img" aria-label="true">
              😊
            </span>
            .
          </p>
          <ul className="project-tag">
            <li>React</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>PWA</li>
          </ul>
        </div>
        <div className="img event-2">
          <div className="img_container">
            <div style={{ width: "100%", paddingBottom: "70%" }}></div>
            <img src={sima2} />
          </div>
          <p>
            A web app for managing school records. A dark theme mode, timetable,
            manage students, staff, and classroom records, mark day to day
            attendance. No external UI components were used, datatable,
            modals/pop ups coded by me
            <span role="img" aria-label="true">
              😊
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
export default Sima
