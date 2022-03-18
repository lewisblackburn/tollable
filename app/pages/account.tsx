import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Link, Routes, useMutation } from "blitz"
import { Suspense } from "react"

const AccountInformation = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

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
        User id: <code>{currentUser?.id}</code>
        <br />
        User role: <code>{currentUser?.role}</code>
      </div>
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
