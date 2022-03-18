import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createCounter from "app/counters/mutations/createCounter"
import { CounterForm, FORM_ERROR } from "app/counters/components/CounterForm"
import { NewCounterForm } from "app/counters/components/NewCounterForm"

const NewCounterPage: BlitzPage = () => {
  const router = useRouter()
  const [createCounterMutation] = useMutation(createCounter)

  return (
    <div>
      <h1>Create New Counter</h1>

      <NewCounterForm
        submitText="Create Counter"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateCounter}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const counter = await createCounterMutation(values)
            router.push(Routes.ShowCounterPage({ counterId: counter.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.CountersPage()}>
          <a>Counters</a>
        </Link>
      </p>
    </div>
  )
}

NewCounterPage.authenticate = true
NewCounterPage.getLayout = (page) => <Layout title={"Create New Counter"}>{page}</Layout>

export default NewCounterPage
