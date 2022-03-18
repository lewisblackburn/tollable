import { BlitzApiHandler } from "blitz"
import db from "db"

// Set auth-token header from cookie

const handler: BlitzApiHandler = async (req, res) => {
  if (req.method === "GET") {
    // Process a GET request
    const authToken = req.headers["auth-token"]

    if (authToken) {
      const counter = await db.counter.update({
        where: { id: authToken.toString() },
        data: { value: { increment: 1 } },
      })

      res.send(counter)
    } else {
      res.send({})
    }

    // get counter
  } else {
    // Handle any other HTTP method
  }
}
export default handler
