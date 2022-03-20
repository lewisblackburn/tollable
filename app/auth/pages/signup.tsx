import { useRouter, BlitzPage, Routes, Head, Link } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { Box, Flex, Text } from "@chakra-ui/react"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="grid" placeItems="center" background="rgb(249, 250, 251)" w="100vw" h="100vh">
        <Flex flexDir="column" alignItems="center" gap={2}>
          <Text as="h1" textAlign="center" fontSize="3xl" fontWeight="bold">
            Create account
          </Text>
          <Flex as="h2" gap={1} pb={2}>
            Or
            <Text color="purple.500" fontWeight="semibold">
              <Link href={Routes.LoginPage()}>
                <a>login to your account</a>
              </Link>
            </Text>
          </Flex>

          <Box background="white" border="gray.200" w="450px" px="2.5rem" py="2rem" rounded="lg">
            <SignupForm onSuccess={() => router.push(Routes.Home())} />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

SignupPage.redirectAuthenticatedTo = "/"

export default SignupPage
