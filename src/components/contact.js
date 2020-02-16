import React, { useEffect } from "react"
import ScrollMagic from "./scrollmagic"
import up from "../images/up.svg"
const Contact = () => {
  useEffect(() => {
    const trigger = document.querySelector("#contact")
    const navigationLinks = Array.from(document.querySelectorAll('nav li'));


    const mainScene = new ScrollMagic({ trigger, hook: 0.6 })

    mainScene.on(
      function() {
        document.querySelector("body").classList.add("contactActive")
        navigationLinks[2].classList.remove('active')
        navigationLinks[3].classList.add('active')
      },
      function() {
        document.querySelector("body").classList.remove("contactActive")
        navigationLinks[3].classList.remove('active')
      }
    )
  })

  useEffect(() => {
    const follower = document.getElementById("cursor-follower")
    let links = []

    links.push(document.querySelector(".up img"))
    links = links.concat(Array.from(document.querySelectorAll("._social li")))

    for (let i in links) {
      links[i].addEventListener("mouseover", () => {
        follower.style.transform = "translate(5px, 5px) scale(1.7)"
      })
      links[i].addEventListener("mouseout", () => {
        follower.style.transform = "translate(5px, 5px) scale(1)"
      })
    }
  })

  return (
    <section id="contact">
      <footer>
        <div className="_reachme">
          <h3>Get In Touch</h3>
          <p>
            My inbox is always open. Whether for a potential project or just to
            say hi, I'll try my best to answer your email ASAP!
          </p>
          <a href="mailto:inioluwwa4.is@gmail.com">Say hello</a>
        </div>

        <div className="_social">
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nerdi_caveman/">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="/">
                CodePen
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/nerdi-caveman/">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="up">
          <img
            onClick={() => window.scrollTo(0, 0)}
            className="mouse-link"
            src={up}
            alt="Inioluwa Sogelola"
          />
        </div>
        <p className="_copyright">Developed by Inioluwa Sogelola</p>
      </footer>
    </section>
  )
}
export default Contact
