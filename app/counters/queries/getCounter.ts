import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetCounter = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetCounter),
  resolver.authorize(),
  async ({ id }, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const counter = await db.counter.findFirst({ where: { id, user: { id: ctx.session.userId } } })

    if (!counter) throw new NotFoundError()

    return counter
  }
)
