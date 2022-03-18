import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateCounter = z.object({
  id: z.string(),
  value: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateCounter),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const counter = await db.counter.update({ where: { id }, data })

    return counter
  }
)
