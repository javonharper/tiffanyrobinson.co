import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tiffany Robinson"
      keywords={[`project`, `product`, `management`]}
    />
    <div
      style={{
        paddingTop: "3rem",
      }}
    >
      <h1>My name is Tiffany Robinson.</h1>
      <h2>Welcome to my page! More coming soon.</h2>
    </div>
  </Layout>
)

export default IndexPage
