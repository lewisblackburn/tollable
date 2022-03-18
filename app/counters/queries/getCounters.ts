import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetCountersInput
  extends Pick<Prisma.CounterFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetCountersInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: counters,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.counter.count({ where }),
      query: (paginateArgs) => db.counter.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      counters,
      nextPage,
      hasMore,
      count,
    }
  }
)
