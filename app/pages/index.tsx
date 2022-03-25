import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { BlitzPage, Image, Link, Routes } from "blitz"

const Home: BlitzPage = () => {
  return (
    <Flex background="brand.100" w="full" minH="100vh">
      <Box
        py={5}
        bgGradient="linear(to-l, purple.300, purple.500)"
        width="full"
        height="50vh"
        minH={500}
      >
        <Container maxW="container.xl" height="full">
          <Flex alignItems="center" justifyContent="space-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 223.76 137"
              width="32"
              height="32"
              fill="white"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M86.76,33H0a45,45,0,0,1,86.76,0Z" />
                  <rect x="43.38" width="137" height="33" />
                  <path d="M223.76,0a45,45,0,0,1-43.38,33A45,45,0,0,1,137,0Z" />
                  <rect
                    x="41.38"
                    y="52"
                    width="137"
                    height="33"
                    rx="7.88"
                    transform="translate(41.38 178.38) rotate(-90)"
                  />
                </g>
              </g>
            </svg>
            <Link href="/counters">
              <Button background="brand.100" color="purple.500">
                Open Webapp
              </Button>
            </Link>
          </Flex>

          <Flex justifyContent="center" height="500" flexDir="column" gap={2} color="white">
            <Heading fontSize="5xl" fontWeight="black">
              One App. Many Counters.
            </Heading>
            <Box maxW={500}>
              <Text fontSize="xl" fontWeight="medium">
                Tollable helps you manage authenticated counters for your projects.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

Home.redirectAuthenticatedTo = Routes.CountersPage()
Home.suppressFirstRenderFlicker = true

export default Home
