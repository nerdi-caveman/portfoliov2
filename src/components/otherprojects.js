import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OtherProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "business-list.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pxpress: file(relativePath: { eq: "pxpress3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clickr: file(relativePath: { eq: "Clickr.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const trigger = document.querySelector("#otherProjects")

    const mainScene = new ScrollMagic({ trigger, hook: 0.85 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("otherProjectActive")
      },
      function() {
        document.querySelector("body").classList.remove("otherProjectActive")
      }
    )
  })

  //   Animate in images
  useEffect(() => {
    const triggers = document.querySelectorAll("#otherProjects img")
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
      <div className="project-container" id="otherProjects">
        <div className="project-title">
          <Parallax offset={[-50, 50]}>
            <h2 className="outer">
              <span>Oth</span>
              <br />
              <span>ers</span>
            </h2>
          </Parallax>
          {/* <h2 className="inner">SIMA SMS</h2> */}
        </div>
        <div className="grid-2">
          <div className="img event-1">
            <a
              className="img_container"
              href="https://frontend-dev.netlify.com/"
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
              Helping people find products nearby and small businesses or startups
              sell and offer services better. <a
                href="https://frontend-dev.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >View Project</a>
            </p>
            <ul className="project-tag">
              <li>Ongoing</li>
              <li>React</li>
              <li>Typescript</li>
              <li>SASS</li>
              <li>Node.JS</li>
              <li>Git</li>
              <li>PWA</li>
            </ul>
          </div>
          <div className="img event-2">
            <div className="img_container">
              <Img
                fluid={data.clickr.childImageSharp.fluid}
                alt="Clickr"
                fadeIn={true}
                placeholderStyle={{ backgroundColor: `black` }}
              />
            </div>
            <p>Pure css and html toggle button and checkbox pack. <br/>
              <a
                href="https://github.com/nerdi-caveman/Clickr"
                target="_blank"
                rel="noopener noreferrer"
              >View on GitHub</a> </p>
            <ul className="project-tag">
              <li>Html</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="img culture-1">
            <div className="img_container">
              <Img
                fluid={data.pxpress.childImageSharp.fluid}
                alt="Pxpress"
                fadeIn={true}
                placeholderStyle={{ backgroundColor: `black` }}
              />
            </div>
            <p>
              A PHP routing library for POST and GET API calls. <br/>
              <a
                href="https://github.com/nerdi-caveman/pxpress"
                target="_blank"
                rel="noopener noreferrer"
              >View on GitHub</a>
            </p>
            <ul className="project-tag">
              <li>PHP</li>
              <li>API</li>
            </ul>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}
export default OtherProjects
