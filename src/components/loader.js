import React, { useEffect } from "react"
import "../styles/components/loader.scss"

const Loader = () => {
  useEffect(() => {
    const body = document.querySelector("html")
    const loadingBar = document.querySelector("#loader #bar")
    loadingBar.style.width = "100%"
    loadingBar.style.transition = " 1.5s all 1.5s ease"
    const timeout = setTimeout(function() {
      body.classList.add('page-loaded')
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  })
  return (
    <div id="loader">
      <div id="loader-lay"></div>
      <div id="loader-dark-lay"></div>
      <div id="loader-show">
        <div id="loading-status">
          <div id="loader-logo">
            <h2>Our logo</h2>
          </div>
          <div id="loading">
            <div id="bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Loader
