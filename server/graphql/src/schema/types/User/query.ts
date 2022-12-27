import { extendType } from 'nexus'

export const QueryUser = extendType({
  type: 'Query',
  definition(t) {
    t.nullable.list.nullable.field('users', {
      type: 'User',
      resolve: async (_, __, ctx) => {
        const users: any = ctx.prisma.user.findMany()
        return users
      },
    })
  },
})
