import { PrismaClient, User } from '@prisma/client'
import { Redis } from 'ioredis'
import { randomBytes } from 'crypto'

export const decodeAccessToken = async (
  req: any,
  prisma: PrismaClient,
  redis: Redis,
): Promise<User | null> => {
  if (req && req.headers && req.headers.authorization) {
    const accessToken = req.headers.authorization.replace('Bearer ', '')
    const id = await redis.get(accessToken)
    if (!id) {
      return null
    }
    return prisma.user.findOne({ where: { id } })
  }
  return null
}

export const randomStr = (length?: number) => {
  return randomBytes(length || 54)
    .toString('base64')
    .replace(/\//gi, '*')
}

export const makeid = (length: number) => {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const getRandomCode = (length: number) => {
  let result = ''
  let characters = '0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
