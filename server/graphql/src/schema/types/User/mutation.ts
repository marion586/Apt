import { extendType, stringArg, nonNull } from 'nexus'
import { createUser, signin } from '../../../resolvers'

export const MutationUser = extendType({
  type: 'Mutation',
  definition(t) {
    t.nullable.field('signup', {
      type: 'Authpayload',
      args: {
        name: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        const { name, firstName, email, password } = args
        return createUser(name, firstName, email, password, ctx)
      },
    }),
      t.nullable.field('signin', {
        type: 'Authpayload',
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        resolve: async (_, args, ctx) => {
          const { email, password } = args
          return signin(email, password, ctx)
        },
      })
  },
})
