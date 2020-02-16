import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import MaximusOgg from "../images/maximusogg.ogg"
// import Video from "./gatsby-video"

const Maximus = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "maxi.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(relativePath: { eq: "mobilemaxi.png" }) {
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
          <span>M</span>
          <span>a</span>
          <span>x</span>
          <br />
          <span>i</span>
          <span>m</span>
          <span>u</span>
          <br />
          <span>s</span>
        </h2>
      </div>
      <div className="grid-1">
        <div className="img event-1">
          <a
            className="img_container"
            href="https://maximus.inioluwa.com"
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
              href="https://maximus.inioluwa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maximus
            </a>{" "}
            is an e-commerce template, inspired by the{" "}
            <a
              href="https://gymshark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gymshark
            </a>{" "}
            website. Includes order history, login, register, product, and
            collection pages.
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
          <p> A sleek mobile navigation with a black and white theme.</p>
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
export default Maximus
