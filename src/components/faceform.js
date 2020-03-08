import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import MaximusOgg from "../images/maximusogg.ogg"
// import Video from "./gatsby-video"

const Faceform = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "faceform1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(relativePath: { eq: "faceform2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const trigger = document.querySelector("#faceform")

    const mainScene = new ScrollMagic({ trigger, hook: 0.6 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("faceformActive")
      },
      function() {
        document.querySelector("body").classList.remove("faceformActive")
      }
    )
  })

  //   Animate in images
  useEffect(() => {
    const triggers = document.querySelectorAll("#faceform img")
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
    <div className="project-container" id="faceform">
      <div className="project-title">
        <h2 className="outer">
          <span>F</span>
          <span>a</span>
          <span>c</span>
          <br />
          <span>e</span>
          <span>f</span>
          <span>o</span>
          <br />
          <span>r</span>
          <span>m</span>
        </h2>
      </div>
      <div className="grid-1">
        <div className="img event-1">
          <a
            className="img_container"
            href="https://faceform.netlify.com"
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
            Create lightweight interactive surveys and forms with {" "}
            <a
              href="https://faceform.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faceform
            </a>. Lightweight, easy to use, and great UX.
          </p>
          <ul className="project-tag">
              <li>React</li>
              <li>Node.JS</li>
              <li>MongoDB</li>
              <li>Google Login API</li>
              <li>Express</li>
              <li>Hooks</li>
              <li>SASS</li>
              <li>Typescript</li>
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
        </div>
        {/* <div className="img event-3">
          <div className="img_container">
            <video playsinline loop autoplay>
              <source src={MaximusMp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Faceform
