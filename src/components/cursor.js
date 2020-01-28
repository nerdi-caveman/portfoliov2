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

  // Animate cursor movement
  useEffect(() => {
    let posX = 0,
      posY = 0

    let mouseX = 0,
      mouseY = 0

    const cursor = document.getElementById("cursor")
    const follower = document.getElementById("cursor-follower")

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
    </>
  )
}
export default Cursor
