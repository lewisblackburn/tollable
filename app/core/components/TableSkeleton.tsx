import { Box, Skeleton, Table, Td, Th, Tr } from "@chakra-ui/react"

const SkeletonRow = ({ width }) => (
  <Box as="tr">
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
  </Box>
)

const TableSkeleton = () => {
  return (
    <Table background="white">
      <thead>
        <Tr background="gray.50">
          <Th>UUID</Th>
          <Th>Name</Th>
          <Th>Counter Value</Th>
          <Th>Updated At</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="75px" />
        <SkeletonRow width="125px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="100px" />
        <SkeletonRow width="75px" />
      </tbody>
    </Table>
  )
}

export default TableSkeleton
