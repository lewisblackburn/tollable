import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from "@chakra-ui/react"
import React from "react"

const TableHeader = ({ isPaidAccount, title }) => (
  <Box mx={4}>
    <Flex justifyContent="space-between">
      <Heading mb={8}>{title}</Heading>
    </Flex>
  </Box>
)

export default TableHeader
