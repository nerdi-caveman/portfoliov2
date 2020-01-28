import React, { useEffect, useRef } from "react"
import "../styles/components/canvas.scss"

const Stars = ({ id = "1", quantity = 20 }) => {
  const requestRef = useRef()

  const setCanvasSize = canvas => {
    canvas.width = window.innerWidth + 300
    canvas.height = window.innerHeight + 300
  }

  useEffect(() => {
    const canvas = requestRef.current,
      context = canvas.getContext("2d")

    // let requestId

    const drawOnCanvas = () => {
      const size = 2
      let j= 0;

      const animateStar = (randomX, randomY, randomSize) => {
        context.beginPath()
        context.filter = "blur(0.2px) saturate(200%)"
        context.arc(randomX, randomY, randomSize * Math.abs(Math.cos(j)), 0, 2 * Math.PI)
        context.fillStyle = "#fff"
        context.fill()

        if(j < 20) {
          j+=1
        } else {
          j = 0
        }
        // requestId = requestAnimationFrame(animateStar)
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < quantity; i++) {
        const randomSize = Math.random() * size
        const randomX = Math.floor(Math.random() * (canvas.width - 10) + 10)
        const randomY = Math.floor(Math.random() * (canvas.height - 15) + 15)
        
        animateStar(randomX, randomY, randomSize)
      }
      // requestId = requestAnimationFrame(drawOnCanvas)
    }
    setCanvasSize(canvas)
    drawOnCanvas()

    return () => {
      // cancelAnimationFrame(requestId)
    }
  })

  return (
    <canvas ref={requestRef} id={`stars${id}`}>
      Canvas not supported
    </canvas>
  )
}
export default Stars
