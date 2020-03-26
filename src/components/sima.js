import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import gif from "../images/wink.gif"
import main from "../images/spotifymain.png"

const Sima = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "spotifymain.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      imgTwo: file(relativePath: { eq: "spotifymobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgThree: file(relativePath: { eq: "wink.gif" }) {
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
              <span>P</span>
              <span>0</span>
              <br />
              <span>T</span>
              <span>I</span>
              <span>F</span>
              <br />
              <span>Y</span>
            </h2>
          </Parallax>
          {/* <h2 className="inner">SIMA SMS</h2> */}
        </div>
        <div className="grid-2">
          <div className="img event-1">
            <a
              className="img_container"
              href="https://my-spotify-profile.herokuapp.com.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={main} />
              {/* <Img
                fluid={data.imgOne.childImageSharp.fluid}
                alt="Cat taking up an entire chair"
                fadeIn={true}
                placeholderStyle={{ backgroundColor: `black` }}
              /> */}
            </a>
            <p>
              <a
                href="https://sima.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify profile
              </a>{" "}
              is a web app for visualizing personalized your Spotify data. View your top
              artists, top tracks, basic user information and more.{" "}
              <a
                href="https://my-spotify-profile.herokuapp.com.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GITHUB
              </a>
            </p>
            <ul className="project-tag">
              <li>React</li>
              <li>Node.JS</li>
              <li>Express</li>
              <li>Spotify Web API</li>
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
            <p></p>
          </div>
          <div className="img culture-1">
            <div className="img_container">
              <img src={gif} />
            </div>
            <p>
              Inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                brittany chiang
              </a>
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
