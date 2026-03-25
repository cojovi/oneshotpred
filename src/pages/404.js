import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-white text-5xl font-poppins font-bold">404: Page not found</h1>
      <p className="text-white opacity-60 mt-4">
        The page you are looking for may have moved during our rebrand to One Shot
        Project Management.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
