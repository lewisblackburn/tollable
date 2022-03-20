import { useRouter, BlitzPage, Routes, Link, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import { Box, Flex, Text } from "@chakra-ui/react"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="grid" placeItems="center" background="rgb(249, 250, 251)" w="100vw" h="100vh">
        <Flex flexDir="column" alignItems="center" gap={2}>
          <Text as="h1" textAlign="center" fontSize="3xl" fontWeight="bold">
            Login to your account
          </Text>
          <Flex as="h2" gap={1} pb={2}>
            Or
            <Text color="purple.500" fontWeight="semibold">
              <Link href={Routes.SignupPage()}>
                <a>create an account</a>
              </Link>
            </Text>
          </Flex>

          <Box background="white" border="gray.200" w="450px" px="2.5rem" py="2rem" rounded="lg">
            <LoginForm
              onSuccess={(_user) => {
                const next = router.query.next
                  ? decodeURIComponent(router.query.next as string)
                  : "/"
                router.push(next)
              }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

LoginPage.redirectAuthenticatedTo = "/"

export default LoginPage
