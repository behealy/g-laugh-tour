import React, { useEffect, useMemo, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Module from "../components/Module"



const calculateTotalContentHeight = (totalModuleCount: number, viewportHeight: number) => {
  return totalModuleCount * 2 * viewportHeight;
};


const IndexPage = ({
  data,
}: {
  data: { allPageContentJson: { nodes: any[]; totalCount: number } }
}) => {
  const {
    allPageContentJson: { nodes: pages, totalCount },
  } = data

  const [viewHeight, setViewHeight] = useState(
    window.innerHeight
  );

  const totalContentHeight = useMemo(() => {
    return calculateTotalContentHeight(totalCount, viewHeight);
  }, [totalCount, viewHeight])

  useEffect(() => {
    window.onresize = () => {
      setViewHeight((window.innerHeight))
    }
  }, [])

  return (
    <div
      style={{
        // position: 'absolute',
        // margin: `0 auto`,
        // maxWidth: 960,
        // padding: `0 1.0875rem 1.45rem`,
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa",
        overflow: "hidden",
      }}
    >
      <main>
        <div
          style={{
            width: "100%",
            height: totalContentHeight,
            backgroundColor: "#ff0000",
          }}
        />
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0.0, 0.0, 50, 0.5)",
          }}
        >
          <Module 
            scrollStop0={0}
            scrollStop1={window.innerHeight}
            moduleHeight={viewHeight}
          />
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query MainSiteQuery {
    allPageContentJson {
      totalCount
      nodes {
        title
        id
        pageBlurbs {
          copy
          title
        }
      }
    }
  }
`

export default IndexPage
