import { Button, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import logout from "app/auth/mutations/logout"
import regenerateSecret from "app/auth/mutations/regenerateSecret"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Link, Routes, useMutation } from "blitz"
import { Suspense, useState } from "react"

const AccountInformation = () => {
  const { user, refetch } = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [regenerateSecretMutation, { isLoading }] = useMutation(regenerateSecret)

  return (
    <>
      <button
        className="button small"
        onClick={async () => {
          await logoutMutation()
        }}
      >
        Logout
      </button>
      <div>
        User id: <code>{user?.id}</code>
        <br />
        User role: <code>{user?.role}</code>
      </div>

      <Flex gap={5}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="secret"
            value={user?.secret}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" background="gray.200" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          background="gray.200"
          isLoading={isLoading}
          loadingText="Loading"
          onClick={() => {
            regenerateSecretMutation({ currentSecret: user?.secret ?? "" }).then(() => refetch())
          }}
        >
          Regenerate
        </Button>
      </Flex>
    </>
  )
}

const Account: BlitzPage = () => {
  return (
    <div className="container">
      <Suspense fallback="">
        <AccountInformation />
      </Suspense>
    </div>
  )
}

Account.authenticate = true
Account.suppressFirstRenderFlicker = true
Account.getLayout = (page) => <Layout title="Account">{page}</Layout>

export default Account
