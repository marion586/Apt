import { objectType } from '@nexus/schema'

export const Authpayload = objectType({
  name: 'Authpayload',
  definition(t) {
    t.string('accessToken')
    t.field('user', { type: 'User' })
  },
})
