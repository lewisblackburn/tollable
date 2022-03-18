import Layout from "app/core/layouts/Layout"
import { BlitzPage, Routes } from "blitz"

const Home: BlitzPage = () => {
  return <div className="container">test</div>
}

Home.redirectAuthenticatedTo = Routes.CountersPage()
Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
