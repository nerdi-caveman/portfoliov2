import React from "react"
import ScrollMagic from './scrollmagic'
import img1 from "../images/sima2.png"
import sima2 from "../images/graffiti_inscriptions_art_letters_wall_118776_3840x2400.jpg"
import { useEffect } from "react"

const Maximus = () => {
    useEffect(()=>{
        const trigger = document.querySelector('#maximus');

        const mainScene = new ScrollMagic({trigger, hook: 0.6});

        mainScene.on(function(){
            document.querySelector('body').classList.add('maximusActive')
        }, function(){
            document.querySelector('body').classList.remove('maximusActive')
        })
    })
  return (
    <div className="project-container" id="maximus">
      <div className="project-title">
        <h2 className="outer">
          Maxi <br /> mus
        </h2>
        {/* <h2 className="inner">SIMA SMS</h2> */}
      </div>
      <div className="grid-1">
        <div className="img event-1">
          <div className="img_container">
            <div style={{ width: "100%", paddingBottom: "62%" }}></div>
            <img src={img1} />
          </div>
          <p>
            <a href="" target="_blank">
              Maximus
            </a>{" "}
            is an e-commerce template for managing school records. A dark theme
            mode, timetable, manage students, staff, and classroom records, mark
            day to day attendance. No external UI components were used,
            datatable, modals/pop ups coded by me
            <span role="img" aria-label="true">
              😊
            </span>
            .
          </p>
          <ul className="project-tag">
            <li>HTML/SCSS</li>
            <li>Javascript</li>
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
          <ul className="project-tag">
            <li>React</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>PWA</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Maximus
