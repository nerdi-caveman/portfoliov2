import React, { useEffect, useRef, useState } from "react"
import "../styles/components/canvas.scss"

const Planet = ({ id = "1" }) => {
  const requestRef = useRef()

  const setCanvasSize = canvas => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  useEffect(() => {
    const canvas = requestRef.current,
      context = canvas.getContext("2d")

    const getMousePosition = e => {
      return { xAxis: e.clientX, yAxis: e.clientY }
    }

    const drawOnCanvas = () => {
      const random = Math.floor(Math.random() * (10 - 1)) + 1
      const width = Math.floor(Math.random() * (50 - 10)) + 10
      const height = Math.floor(Math.random() * (50 - 10)) + 10

      const animatePlanet = e => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        const random = Math.floor(Math.random() * (10 - 1)) + 1
        const width = Math.floor(Math.random() * (50 - 10)) + 10
        const height = Math.floor(Math.random() * (50 - 10)) + 10
        const mouse = getMousePosition(e)

        context.filter = `blur(${random}px) saturate(${random}%)`
        context.ellipse(- ++(mouse.xAxis), - ++(mouse.yAxis), width, height, Math.PI / 4, 0, 2 * Math.PI)
      }

      context.save()
      context.beginPath()
      context.ellipse(100, 100, width, height, Math.PI / 4, 0, 2 * Math.PI)
      context.filter = `blur(18px) saturate(${random}%)`
      context.fillStyle = "#fff"
      context.fill()

      document.addEventListener("mousemove", function(e) {
        animatePlanet(e)
      })
      document.addEventListener("mousedown", function(e) {
        animatePlanet(e)
      })
      // requestId = requestAnimationFrame(drawOnCanvas)
    }
    setCanvasSize(canvas)
    drawOnCanvas()

    return () => {
      // cancelAnimationFrame(requestId)
    }
  })

  return (
    <canvas ref={requestRef} id={`planet${id}`}>
      Canvas not supported
    </canvas>
  )
}
export default Planet
