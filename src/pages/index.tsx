import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let _scr = 0

let frame: any

window.addEventListener("mousewheel", (e: Event) => {
  if (frame) {
    cancelAnimationFrame(frame)
  }

  frame = requestAnimationFrame(() => {
    _scr += (e as WheelEvent).deltaY
    console.log(_scr)
  })
})

const IndexPage = () => {
  const bodonk = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (bodonk.current) {
      console.log(bodonk.current);
    }
  }, [bodonk.current])

  return (
    <Layout>
      {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      <div ref={bodonk}>
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: "#ff0000",
          }}
        />
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: "#00ff00",
          }}
        />
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: "#0000ff",
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
