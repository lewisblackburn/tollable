import { Box, Table, Td, Th, Tr } from "@chakra-ui/react"
import { Link, Routes } from "blitz"

const CounterTable = ({ counters }) => {
  return (
    <Table background="white">
      <thead>
        <Tr display="grid" gridTemplateColumns="2fr 1fr 1fr 1fr" background="gray.50">
          <Th>UUID</Th>
          <Th>Name</Th>
          <Th>Counter Value</Th>
          <Th>Updated At</Th>
        </Tr>
      </thead>
      <tbody>
        {counters.map((counter) => (
          <Link key={counter.id} href={Routes.ShowCounterPage({ counterId: counter.id })}>
            <Tr display="grid" gridTemplateColumns="2fr 1fr 1fr 1fr" cursor="pointer">
              <Td>{counter.id}</Td>
              <Td>{counter.name}</Td>
              <Td>{counter.value}</Td>
              <Td>{new Date(counter.updatedAt).toLocaleDateString()}</Td>
            </Tr>
          </Link>
        ))}
      </tbody>
    </Table>
  )
}

export default CounterTable
