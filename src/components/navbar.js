import React, { useEffect } from "react"

import "../styles/components/navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")

    navBtn.addEventListener("mouseover", function(e) {
      const desktopCursor = document.querySelector(".isnotmobile #cursor")
      // cursor.style.display = "none"

      if (desktopCursor) {
        desktopCursor.style.width = "50px"
        desktopCursor.style.height = "50px"
        desktopCursor.style.border = "1px solid #fff"
        desktopCursor.style.background = "transparent"
      }
    })

    navBtn.addEventListener("mouseout", function(e) {
      const desktopCursor = document.querySelector(".isnotmobile #cursor")
      // cursor.style.display = "block"

      if (desktopCursor) {
        desktopCursor.style.width = "10px"
        desktopCursor.style.height = "10px"
        desktopCursor.style.border = "1px solid transparent"
        desktopCursor.style.background = "#fff"
      }
    })
  })

  // Animate navbar panel
  useEffect(() => {
    let i = 0
    const navBtn = document.querySelector("#nav-btn")
    const navTarget = document.querySelector("nav")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li")

    const navOpen = index => {
      //animate each navlinks with delay
      for (let index = navLinks.length - 1; index >= 0; index--) {
        navLinks[index].classList.remove("active")
        navLinks[index].style.opacity = "0"
        navLinks[index].style.transition = ` .35s all ${0 +
          (navLinks.length - 1 - index) / 4.5}s ease-in-out`
        navLinks[index].style.transform = "translateY(15px)"
      }
      navLinks[index].classList.add("active")

      setTimeout(() => {
        navBtn.classList.remove("active")
        navTarget.classList.remove("active")
        // intro.style.opacity = "1"
        document.querySelector("html").style.overflowY = "visible"
      }, 1000)
      i = 0
    }

    navBtn.addEventListener("click", function() {
      if (i === 0) {
        navBtn.classList.add("active")
        navTarget.classList.add("active")
        // intro.style.opacity = "0"
        document.querySelector("html").style.overflowY = "hidden"
        i++

        //animate each navlinks with delay
        for (let index = 0; index < navLinks.length; index++) {
          navLinks[index].style.opacity = "1"
          navLinks[index].style.transition = ` .35s all ${1.75 +
            index / 4}s ease-in-out`
          navLinks[index].style.transform = "translateY(0)"

          navLinks[index].addEventListener("click", () => {
            navOpen(index)
          })
        }
      } else {
        //animate each navlinks with delay
        for (let index = navLinks.length - 1; index >= 0; index--) {
          navLinks[index].style.opacity = "0"
          navLinks[index].style.transition = ` .35s all ${0 +
            (navLinks.length - 1 - index) / 4}s ease-in-out`
          navLinks[index].style.transform = "translateY(15px)"
        }
        navBtn.classList.remove("active")
        navTarget.classList.remove("active")

        setTimeout(() => {
          // intro.style.opacity = "1"
          document.querySelector("html").style.overflowY = "visible"
        }, 1000)

        i--
      }
    })

    return () => {
      i = 0
    }
  }, [])

  // Animate navbar menu links onhover
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li h3")
    Array.from(navLinks).forEach((item, index) => {
      navLinks[index].addEventListener("mouseenter", function() {
        cursor.style.padding = "20px"
        // cursor.style.display = "none"
      })
      navLinks[index].addEventListener("mouseout", function() {
        cursor.style.padding = "0"
        // cursor.style.display = "block"
      })
    })
  }, [])

  // Animate links clicked
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li h3")
    Array.from(navLinks).forEach((item, index) => {
      navLinks[index].addEventListener("mouseenter", function() {
        cursor.style.padding = "20px"
        // cursor.style.display = "none"
      })
      navLinks[index].addEventListener("mouseout", function() {
        cursor.style.padding = "0"
        // cursor.style.display = "block"
      })
    })
  }, [])

  return (
    <>
      <div id="top-lay"></div>
      <header>
        <div id="logo">
          <Link to="/">Logo</Link>
        </div>
        <div id="nav-btn">
          <div id="nav-open"></div>
          <div id="nav-close"></div>
        </div>
      </header>
      <nav>
        <div id="nav-lay"></div>
        <div id="nav-target">
          <ul id="nav-link">
            <li className="active">
              <sub>01</sub>
              <a href="/" onClick={() => window.location.reload()}>
                <h3>Intro</h3>
              </a>
            </li>
            <li>
              <sub>02</sub>
              <a href="#about-us">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <sub>03</sub>
              <a href="#contact">
                <h3>Contact</h3>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
