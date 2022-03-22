import { Button, Flex, Table, Td, Th, Tr } from "@chakra-ui/react"
import { Counter } from "@prisma/client"
import deleteCounter from "app/counters/mutations/deleteCounter"
import { Link, Routes, useMutation, useRouter } from "blitz"

const CounterTable = ({ counters }) => {
  const router = useRouter()
  const [deleteCounterMutation] = useMutation(deleteCounter)

  return (
    <Table background="white">
      <thead>
        <Tr display="grid" gridTemplateColumns="2fr 1fr 1fr 1fr 1fr" background="gray.50">
          <Th>UUID</Th>
          <Th>Name</Th>
          <Th>Counter Value</Th>
          <Th>Updated At</Th>
          <Th></Th>
        </Tr>
      </thead>
      <tbody>
        {counters.map((counter: Counter) => (
          <Tr
            key={counter.id}
            display="grid"
            gridTemplateColumns="2fr 1fr 1fr 1fr 1fr"
            alignItems="center"
          >
            <Td borderBottom="none">{counter.id}</Td>
            <Td borderBottom="none">{counter.name}</Td>
            <Td borderBottom="none">{counter.value}</Td>
            <Td borderBottom="none">{new Date(counter.updatedAt).toLocaleDateString()}</Td>
            <Td borderBottom="none">
              <Flex justifyContent="space-between">
                <Link href={Routes.ShowCounterPage({ counterId: counter.id })}>
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={async () => {
                    if (window.confirm("This will be deleted")) {
                      await deleteCounterMutation({ id: counter.id })
                      router.push(Routes.CountersPage())
                    }
                  }}
                >
                  Delete
                </Button>
              </Flex>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CounterTable
