import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Maximus = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "sima2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(
        relativePath: {
          eq: "graffiti_inscriptions_art_letters_wall_118776_3840x2400.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const trigger = document.querySelector("#maximus")

    const mainScene = new ScrollMagic({ trigger, hook: 0.6 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("maximusActive")
      },
      function() {
        document.querySelector("body").classList.remove("maximusActive")
      }
    )
  })

  //   Animate in images
  useEffect(() => {
    const triggers = document.querySelectorAll("#maximus img")
    for (let i in Array.from(triggers)) {
      const trigger = triggers[i]
      const mainScene = new ScrollMagic({ trigger, hook: 0.75 })

      mainScene.on(
        function() {
          triggers[i].classList.add("active")
        },
        function() {
          triggers[i].classList.remove("active")
        }
      )
    }
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
            <Img
              fluid={data.imgOne.childImageSharp.fluid}
              alt="Cat taking up an entire chair"
              fadeIn={true}
              placeholderStyle={{ backgroundColor: `black` }}
            />
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
            <Img
              fluid={data.imgTwo.childImageSharp.fluid}
              alt="Cat taking up an entire chair"
              fadeIn={true}
              placeholderStyle={{ backgroundColor: `black` }}
            />
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
