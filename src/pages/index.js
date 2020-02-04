import React from "react"
import "../styles/app.scss"
import { useEffect } from "react"
import Cursor from "../components/cursor"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Helmet from "react-helmet"
import Sima from "../components/sima"
import About from "../components/about"
import Maximus from "../components/maximus"
import OtherProjects from "../components/otherprojects"

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
      secondElement.style.transform = `translateX(-${30 - offset / 70}%)`
    })
  })


  // Cursor animation on project description text link
  useEffect(() => {
    const follower = document.getElementById("cursor-follower")

    const links = Array.from(document.querySelectorAll(".project-container .img p a"))

    for(let i in links ) {
      links[i].addEventListener('mouseover',()=>{
        follower.style.transform = 'translate(5px, 5px) scale(1.8)'
      })
      links[i].addEventListener('mouseout',()=>{
        follower.style.transform = 'translate(5px, 5px) scale(1)'
      })
    }
  })


  return (
    <>
      <Helmet>
        {/* <link rel="stylesheet" href="https://use.typekit.net/fgw7kgu.css" /> */}
        <link rel="icon" href="../images/carrot.svg" />
      </Helmet>
      <SEO
        description="Inioluwa Sogelola is a software engineer based in Ibadan, NG who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications."
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
      <Navbar/>
      <main>
        <Cursor />
        <section id="home">
          <div className="intro-text">
            <h2 className="text-one">Software</h2>
            <h2 className="text-two">Engineer</h2>
          </div>
        </section>
        <section id="project">
          <div className="projects">
            <About />
            <Sima />
            <Maximus />
            <OtherProjects/>
          </div>
        </section>
        <Contact/>
      </main>
    </>
  )
}

export default IndexPage
