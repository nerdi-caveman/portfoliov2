import React, { useRef, useEffect } from "react"
import Logo from "../images/portfoliologo3.svg"
import "../styles/components/navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  const ref = useRef()

  const openNav = () => {
    if (/isClose/.test(ref.current.classList)) {
      ref.current.classList.add("isOpen")
      ref.current.classList.remove("isClose")
    }
  }

  useEffect(() => {
    const nav = document.querySelector('nav')
    const follower = document.getElementById("cursor-follower")

    nav.addEventListener("mouseover", () => {
      follower.style.transform = "translate(5px, 5px) scale(1.7)"
    })
    nav.addEventListener("mouseout", () => {
      follower.style.transform = "translate(5px, 5px) scale(1)"
    })
  })

  return (
    <>
      <header>
        <div id="logo">
          <Link to="/">
          <img src ={Logo} alt ="logo" style ={{width:'100px', marginTop:"7px"}}/>
          </Link>
        </div>
        <nav
          ref={ref}
          role="button"
          onKeyUp={openNav}
          className="isOpen"
          onClick={openNav}
        >
          <ul>
            <li className="active">
              INTRO <sup>01</sup>
            </li>
            <li>
              ABOUT <sup>02</sup>
            </li>
            <li>
              WORK <sup>03</sup>
            </li>
            <li>
              CONTACT <sup>04</sup>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
