import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import img1 from "../images/sima2.png"
import sima2 from "../images/graffiti_inscriptions_art_letters_wall_118776_3840x2400.jpg"

const Sima = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "sima2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTwo: file(relativePath: { eq: "graffiti_inscriptions_art_letters_wall_118776_3840x2400.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

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
              fadeIn="true"
              placeholderStyle={{ backgroundColor: `black` }}
            />
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
            <Img
              fluid={data.imgTwo.childImageSharp.fluid}
              alt="Cat taking up an entire chair"
              fadeIn="true"
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
        </div>
      </div>
    </div>
  )
}
export default Sima
