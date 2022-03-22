import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCounters from "app/counters/queries/getCounters"
import TableHeader from "app/core/components/TableHeader"
import CounterTable from "app/core/components/CounterTable"
import TableSkeleton from "app/core/components/TableSkeleton"
import { Button, Flex } from "@chakra-ui/react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const CountersList = () => {
  const { user } = useCurrentUser()
  const [{ counters }] = usePaginatedQuery(getCounters, {
    where: {
      user: {
        id: {
          equals: user?.id,
        },
      },
    },
    orderBy: { id: "desc" },
    take: 100,
  })

  return <CounterTable counters={counters} />
}

const CountersPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Counters</title>
      </Head>

      <TableHeader title="My Counters" isPaidAccount={false} />
      <Suspense
        fallback={
          <>
            <TableSkeleton rows={5} />
          </>
        }
      >
        <Flex flexDir="column" gap={10}>
          <CountersList />
          <Link href={Routes.NewCounterPage()}>
            <Button background="gray.200">New</Button>
          </Link>
        </Flex>
      </Suspense>
    </>
  )
}

CountersPage.authenticate = true
CountersPage.getLayout = (page) => <Layout>{page}</Layout>

export default CountersPage
