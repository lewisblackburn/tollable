import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteCounter = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteCounter), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const counter = await db.counter.deleteMany({ where: { id } })

  return counter
})
