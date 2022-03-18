import { BlitzApiHandler } from "blitz"
import db from "db"

// Set auth-token header from cookie

const handler: BlitzApiHandler = async (req, res) => {
  if (req.method === "GET") {
    // Process a GET request
    const authToken = req.headers["auth-token"]

    if (authToken && req.query.counterId) {
      const counter = await db.user.update({
        where: {
          secret: authToken.toString(),
        },
        data: {
          counters: {
            update: {
              where: {
                id: req.query.counterId.toString(),
              },
              data: {
                value: { increment: 1 },
              },
            },
          },
        },
        include: { counters: { select: { value: true } } },
      })

      res.send({ value: counter?.counters[0]?.value })
    } else {
      res.send({})
    }

    // get counter
  } else {
    // Handle any other HTTP method
  }
}
export default handler
