import React from "react"
import "../styles/app.scss"
import { useEffect } from "react"
import Cursor from "../components/cursor"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Sima from "../components/sima"
import Maximus from "../components/maximus"

const IndexPage = () => {
  useEffect(() => {
    if (
      /iPhone|iPad|Android|Blackberry|iPod/.test(window.navigator.userAgent)
    ) {
      document.querySelector("body").classList.add("ismobile")
      document.querySelector("body").classList.remove("isnotmobile")
    } else {
      document.querySelector("body").classList.remove("ismobile")
      document.querySelector("body").classList.add("isnotmobile")
    }
  })

  useEffect(() => {
    const introText = document.querySelector(".intro-text")
    let elemY = introText.getBoundingClientRect().y
    window.addEventListener("scroll", function(e) {
      const offset = elemY - introText.getBoundingClientRect().y

      const firstElement = introText.querySelector(".text-one")
      const secondElement = introText.querySelector(".text-two")
      firstElement.style.transform = `translateX(${27 - offset / 70}%)`
      secondElement.style.transform = `translateX(-${35 - offset / 70}%)`
    })
  })

  return (
    <ParallaxProvider>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/fgw7kgu.css" />
      </Helmet>
      <SEO
        description="Inioluwa Sogelola is a software engineer based in Ibdan, NG who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications."
        lang="en"
        title="Inioluwa Sogelola"
        meta={[
          {
            "name": "keywords",
            "content":
              "Inioluwa Sogelola, Inioluwa, Sogelola, nerdi_caveman, nerdi-caveman, software engineer, software developer, frontend developer, front-end engineer, web developer, javascript, typescript, nigeria, remote, freelance",
          },
        ]}
      />
      <main>
        <Cursor />
        <section id="home">
          <div className="intro-text">
            <h2 className="text-one">Software</h2>
            <h2 className="text-two">Engineer</h2>
          </div>
        </section>
        <section id="project">
          <div className="section-title">
            {/* <Parallax className="custom-class" y={[-100, 100]} tagOuter="div"> */}
            <h2>Projects</h2>
            {/* </Parallax> */}
          </div>
          {/* <Img fixed={query.file.childImageSharp.fixed} /> */}
          <div className="projects">
            <Sima />
            <Maximus />
          </div>
        </section>
        <section id="skills">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
        </section>
      </main>
    </ParallaxProvider>
  )
}

export default IndexPage
