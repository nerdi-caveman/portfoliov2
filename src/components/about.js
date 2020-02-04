import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  useEffect(() => {
    const trigger = document.querySelector("#about")
    const navigationLinks = Array.from(document.querySelectorAll("nav li"))

    const mainScene = new ScrollMagic({ trigger, hook: 0.85 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("aboutActive")
        navigationLinks[0].classList.remove("active")
        navigationLinks[1].classList.add("active")
        document.querySelector("nav").classList.add("isClose")
        document.querySelector("nav").classList.remove("isOpen")
      },
      function() {
        document.querySelector("body").classList.remove("aboutActive")
        navigationLinks[1].classList.remove("active")
        navigationLinks[0].classList.add("active")
        document.querySelector("nav").classList.add("isOpen")
        document.querySelector("nav").classList.remove("isClose")
      }
    )
  })

  useEffect(()=>{
    const link = document.querySelector("#about p a")
    const image = document.querySelector("#cursor-image")
    const follower = document.getElementById("cursor-follower")

    
    link.addEventListener("mouseover", () => {
      image.style.opacity = 1
      image.style.transform = "translate(-40%, -40%) scaleY(1)"
      follower.style.opacity = 0
    })
    link.addEventListener("mouseout", () => {
      image.style.opacity = 0
      image.style.transform = "translate(-40%, -40%) scaleY(1.3)"
      follower.style.opacity = 1
    })

  })

  return (
    <section className="project-container" id="about">
      <p>
        Hello! I'm <a href="mailto:inioluwwa4.isgmail.com">Inioluwa</a>, a software engineer based in Ibadan,
        NG who enjoys building exceptional websites and web apps that provide
        intuitive, pixel-perfect user interfaces with efficient and modern
        backends.
        <br />
        <br />
        <span>
          Here are a few technologies I've been working with recently:
        </span>
      </p>
      <ul className="project-tag">
        <li>Javascript (ES6+)</li>
        <li>React</li>
        <li>Node.JS</li>
        <li>Typescript</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML & (S)CSS</li>
      </ul>
    </section>
  )
}
export default About
