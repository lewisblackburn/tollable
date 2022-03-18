import { Flex } from "@chakra-ui/react"
import { Head, BlitzLayout } from "blitz"
import Header from "../components/Header"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "tollable"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex backgroundColor="gray.100" minH="100vh">
        <Header />
        <Flex margin="120px auto" direction="column" w="full" h="full" maxW="1250px" px={[0, 8, 8]}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default Layout
