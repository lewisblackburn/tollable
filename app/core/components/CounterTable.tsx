import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react"
import deleteCounter from "app/counters/mutations/deleteCounter"
import { Link, Routes, useMutation, useRouter } from "blitz"
import { useState } from "react"

const CounterTable = ({ counters }) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
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
        {counters.map((counter) => (
          <Tr
            key={counter.id}
            display="grid"
            gridTemplateColumns="2fr 1fr 1fr 1fr 1fr"
            alignItems="center"
          >
            <Td borderBottom="none">
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={counter.uuid}
                  readOnly
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Td>
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
