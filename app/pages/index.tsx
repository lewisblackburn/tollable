import { Button, Flex } from "@chakra-ui/react"
import { BlitzPage, Link, Routes } from "blitz"

const Home: BlitzPage = () => {
  return (
    <Flex display="grid" placeItems="center" background="rgb(249, 250, 251)" w="full" minH="100vh">
      <Link href="/counters">
        <Button>Click Me</Button>
      </Link>
    </Flex>
  )
}

Home.redirectAuthenticatedTo = Routes.CountersPage()
Home.suppressFirstRenderFlicker = true

export default Home
