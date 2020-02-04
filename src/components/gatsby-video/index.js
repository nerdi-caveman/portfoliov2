import React from "react"
import Frame from "./frame"
import { graphql } from "gatsby"

const data = graphql`
  query($path: String!) {
    MarkdownRemark(frontmatter: { path: { eq: "maximus.mp4" } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
        videoSrcURL
        videoTitle
      }
    }
  }
`
export default function Video() {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Frame
      videoSrcURL={frontmatter.videoSrcURL}
      videoTitle={frontmatter.videoTitle}
    />
  )
}
