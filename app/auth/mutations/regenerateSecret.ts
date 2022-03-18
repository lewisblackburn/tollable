import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { v4 } from "uuid"

const RegenerateSecret = z.object({
  currentSecret: z.string(),
})

export default resolver.pipe(
  resolver.zod(RegenerateSecret),
  resolver.authorize(),
  async ({ currentSecret }, ctx) => {
    await db.user.update({
      where: { id: ctx.session.userId },
      data: { secret: v4() },
    })

    return true
  }
)
