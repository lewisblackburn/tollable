import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    brand: {
      100: "rgb(249, 250, 251)",
    },
  },
})

export default theme
