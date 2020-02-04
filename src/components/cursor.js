import React, { useEffect } from "react"
import TweenMax from "gsap"
import "../styles/components/cursor.scss"

const Cursor = () => {
  const hideTapHighlight = () => {
    document.addEventListener("mousedown", function(e) {
      if (e.detail > 1) {
        e.preventDefault()
      }
    })
  }

  // Hide double tap highlight
  useEffect(() => {
    hideTapHighlight()
  })

  useEffect(() => {
    const follower = document.getElementById("cursor-follower")

    const links = Array.from(document.querySelectorAll("a.img_container"))

    for(let i in links ) {
      links[i].addEventListener('mouseover',()=>{
        follower.style.transform = 'translate(5px, 5px) scale(5)'
      })
      links[i].addEventListener('mouseout',()=>{
        follower.style.transform = 'translate(5px, 5px) scale(1)'
      })
    }
  })

  // Animate cursor movement
  useEffect(() => {
    let posX = 0,
      posY = 0

    let mouseX = 0,
      mouseY = 0

    const cursor = document.getElementById("cursor")
    const follower = document.getElementById("cursor-follower")
    const image = document.getElementById("cursor-image")

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9
        posY += (mouseY - posY) / 9

        TweenMax.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        })
        TweenMax.set(image, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        })

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        })
      },
    })

    document.addEventListener("mousemove", function(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    })
    return () =>
      document.removeEventListener("mousemove", function(e) {
        mouseX = 0
        mouseY = 0
      })
  }, [])

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-follower"></div>
      <div id ="cursor-image"></div>
    </>
  )
}
export default Cursor
