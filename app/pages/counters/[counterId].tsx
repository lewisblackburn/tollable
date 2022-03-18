import CounterTable from "app/core/components/CounterTable"
import TableHeader from "app/core/components/TableHeader"
import Layout from "app/core/layouts/Layout"
import { CounterForm, FORM_ERROR } from "app/counters/components/CounterForm"
import deleteCounter from "app/counters/mutations/deleteCounter"
import updateCounter from "app/counters/mutations/updateCounter"
import getCounter from "app/counters/queries/getCounter"
import { BlitzPage, Head, Routes, useMutation, useParam, useQuery, useRouter } from "blitz"
import { Suspense } from "react"

export const Counter = () => {
  const router = useRouter()
  const counterId = useParam("counterId", "string")
  const [deleteCounterMutation] = useMutation(deleteCounter)
  // This ensures the query never refreshes and overwrites the form data while the user is editing.
  const [counter, { setQueryData }] = useQuery(
    getCounter,
    { id: counterId },
    { staleTime: Infinity }
  )
  const [updateCounterMutation] = useMutation(updateCounter)

  return (
    <>
      <Head>
        <title>Counter {counter.id}</title>
      </Head>

      <TableHeader title={counter.name} isPaidAccount={false} />
      <CounterTable counters={[counter]} />

      <CounterForm
        submitText="Update Counter"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={UpdateCounter}
        initialValues={counter}
        onSubmit={async (values) => {
          try {
            const updated = await updateCounterMutation({
              id: counter.id,
              ...values,
              value: parseInt(values.value, 10),
            })
            await setQueryData(updated)
            router.push(Routes.ShowCounterPage({ counterId: updated.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteCounterMutation({ id: counter.id })
            router.push(Routes.CountersPage())
          }
        }}
        style={{ marginLeft: "0.5rem" }}
      >
        Delete
      </button>
    </>
  )
}

const ShowCounterPage: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Counter />
    </Suspense>
  )
}

ShowCounterPage.authenticate = true
ShowCounterPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCounterPage
