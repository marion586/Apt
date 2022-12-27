import { ApolloError } from 'apollo-server-express'
import { hash } from 'bcrypt'
import { startCase, toLower, toUpper } from 'lodash'
import { Context } from '../../context'
import { randomStr } from '../../lib/auth'
import { validateEmail } from '../../lib/regex'

export const createUser = async (
  name: string,
  firstName: string,
  email: string,
  password: string,
  ctx: Context,
) => {
  const accessToken = randomStr()
  const password_hash = await hash(password, 10)

  if (!name.trim()) throw new ApolloError('Invalid name', '401')
  if (!email.trim() || !validateEmail(email))
    throw new ApolloError('Invalid email', '401')
  if (!password.trim()) throw new ApolloError('Invalid password', '401')

  if (!!name && !!email && !!password) {
    const user = await ctx.prisma.user.create({
      data: {
        name: toUpper(name).trim(),
        firstName: startCase(toLower(firstName)).trim(),
        email: email.trim(),
        password_hash: password_hash.trim(),
      },
    })
    await ctx.redis.setex(accessToken, 48 * 3600, user.id)

    return { accessToken, user: { ...user, password: user.password_hash } }
  }
  return null
}
