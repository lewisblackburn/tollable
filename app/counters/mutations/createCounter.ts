import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateCounter = z.object({
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateCounter),
  resolver.authorize(),
  async ({ name }, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const counter = await db.counter.create({
      data: {
        name: name.replaceAll(" ", "-"),
        value: 0,
        user: {
          connect: {
            id: ctx.session.userId,
          },
        },
      },
    })

    return counter
  }
)
