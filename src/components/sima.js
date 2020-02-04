import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Sima = () => {
  const data = useStaticQuery(graphql`
    query {

      imgOne: file(relativePath: { eq: "sima1test.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      imgTwo: file(relativePath: { eq: "PMVCYM0.jpg" }) {
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
    const navigationLinks = Array.from(document.querySelectorAll("nav li"))

    const mainScene = new ScrollMagic({ trigger, hook: 0.85 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("simaActive")
        navigationLinks[1].classList.remove("active")
        navigationLinks[2].classList.add("active")
      },
      function() {
        document.querySelector("body").classList.remove("simaActive")
        navigationLinks[2].classList.remove("active")
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
    <ParallaxProvider>
      <div className="project-container" id="sima">
        <div className="project-title">
          <Parallax offset={[-50, 50]}>
            <h2 className="outer">
              <span>S</span>
              <span>I</span>
              <span>M</span>
              <br />
              <span>A</span>
            </h2>
          </Parallax>
          {/* <h2 className="inner">SIMA SMS</h2> */}
        </div>
        <div className="grid-2">
          <div className="img event-1">
            <a
              className="img_container"
              href="https://sima.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={data.imgOne.childImageSharp.fluid}
                alt="Cat taking up an entire chair"
                fadeIn={true}
                placeholderStyle={{ backgroundColor: `black` }}
              />
            </a>
            <p>
              <a
                href="https://sima.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <li>SASS</li>
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
            <p></p>
          </div>
          <div className="img culture-1">
            <div className="img_container">
              <Img
                fluid={data.imgTwo.childImageSharp.fluid}
                alt="Cat taking up an entire chair"
                fadeIn={true}
                placeholderStyle={{ backgroundColor: `black` }}
              />
            </div>
            <p>
              No external UI components were used, datatable, modals/pop ups
              coded by me
              <span role="img" aria-labelledby="icon">
                😊
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}
export default Sima
