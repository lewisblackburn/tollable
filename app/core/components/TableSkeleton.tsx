import { Box, Skeleton, Table, Td, Th, Tr } from "@chakra-ui/react"

const SkeletonRow = ({ width }) => (
  <Tr gridTemplateColumns="2fr 1fr 1fr 1fr 1fr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Tr>
)

const widths = {
  0: "100px",
  1: "75px",
  3: "50px",
  4: "125px",
}

const TableSkeleton = ({ rows }: { rows: number }) => {
  const width = Array.from({ length: rows }, (_, i) => widths[i % Object.keys(widths).length])

  return (
    <Table background="white">
      <thead>
        <Tr background="gray.50" gridTemplateColumns="2fr 1fr 1fr 1fr 1fr">
          <Th>UUID</Th>
          <Th>Name</Th>
          <Th>Counter Value</Th>
          <Th>Updated At</Th>
          <Th></Th>
        </Tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, i) => (
          <SkeletonRow key={i} width={width[i]} />
        ))}
      </tbody>
    </Table>
  )
}

export default TableSkeleton
