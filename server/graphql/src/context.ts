import { PrismaClient, User } from '@prisma/client'
import Redis from 'ioredis'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import { decodeAccessToken } from './lib/auth'

export const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  pubsub: RedisPubSub
  redis: Redis.Redis
  currentUser: User | null
}
export const createContext = async (
  { req }: any,
  redis: Redis.Redis,
  pubsub: RedisPubSub,
): Promise<Context> => {
  const currentUser = await decodeAccessToken(req, prisma, redis)
  return {
    prisma,
    pubsub,
    redis,
    currentUser,
  }
}
