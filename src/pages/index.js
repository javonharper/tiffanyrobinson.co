import React from "react"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tiffany Robinson"
      keywords={[`project`, `product`, `management`]}
    />
    <div style={{ paddingTop: "3rem" }}>
      <div className="hero">
        <img class="hero-image" src={require("../images/me.jpeg")} />
        <div className="hero-heading">
          Hi! I am Tiffany, an aspiring product manager.
        </div>
        <div className="hero-subheading">
          Currently, I work as a paralegal. I am seeking to leverage my
          experience with my passion for technology. Below are side projects I
          have contributed to along with my blog that details my experience.
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
