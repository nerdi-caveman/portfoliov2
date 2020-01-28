import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Sima = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "2953211.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(
        relativePath: {
          eq: "3072518.jpg"
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
    const trigger = document.querySelector("#sima")

    const mainScene = new ScrollMagic({ trigger, hook: 0.6 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("simaActive")
      },
      function() {
        document.querySelector("body").classList.remove("simaActive")
      }
    )
  })

  //   Animate in images
  useEffect(() => {
    const triggers = document.querySelectorAll("#sima img")
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
    <div className="project-container" id="sima">
      <div className="project-title">
        <h2 className="outer">SIMA</h2>
        {/* <h2 className="inner">SIMA SMS</h2> */}
      </div>
      <div className="grid-2">
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
              Sima
            </a>{" "}
            is a web app for managing school records. A dark theme mode,
            timetable, manage students, staff, and classroom records, mark day
            to day attendance.
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
            <Img
              fluid={data.imgTwo.childImageSharp.fluid}
              alt="Cat taking up an entire chair"
              fadeIn={true}
              placeholderStyle={{ backgroundColor: `black` }}
            />
          </div>
          <p>No external UI components were used, datatable, modals/pop ups coded
            by me
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
