import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCounters from "app/counters/queries/getCounters"
import TableHeader from "app/core/components/TableHeader"
import CounterTable from "app/core/components/CounterTable"
import TableSkeleton from "app/core/components/TableSkeleton"

export const CountersList = () => {
  const router = useRouter()
  const [{ counters }] = usePaginatedQuery(getCounters, {
    orderBy: { id: "desc" },
    take: 100,
  })

  return (
    <div>
      <CounterTable counters={counters} />
    </div>
  )
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
            <TableSkeleton />
          </>
        }
      >
        <CountersList />
      </Suspense>
    </>
  )
}

CountersPage.authenticate = true
CountersPage.getLayout = (page) => <Layout>{page}</Layout>

export default CountersPage
