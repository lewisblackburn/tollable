import { Avatar, Flex } from "@chakra-ui/react"
import { Link } from "blitz"

const Header = ({}) => {
  return (
    <Flex position="fixed" w="full" background="white" mb={[8, 16]}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        maxW="1250px"
        margin="0 auto"
        w="full"
        px={8}
        h="60px"
      >
        <Flex align="center" gap={5}>
          <Link href="/" passHref>
            Tollable
          </Link>
          <Link href="/counters" passHref>
            Counters
          </Link>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Link href="/account" passHref>
            <a>
              <Avatar size="sm" />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
