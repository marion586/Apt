import { Context } from '../../context'
import { ApolloError } from 'apollo-server-express'
import { compare } from 'bcrypt'
import { randomStr } from '../../lib/auth'

export const signin = async (email: string, password: string, ctx: Context) => {
  const user = await ctx.prisma.user.findOne({
    where: { email },
  })
  if (!user) new ApolloError('User not found', '404')

  const passwordValid = await compare(
    password,
    user && user.password_hash ? user.password_hash : '',
  )

  if (!passwordValid) throw new ApolloError('Invalid password', '404')

  const accessToken = randomStr()

  ctx.redis.setex(accessToken, 48 * 3600, user && user.id ? user.id : '')

  return { accessToken, user }
}
