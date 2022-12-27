import { makeSchema } from 'nexus'
import * as Path from 'path'
import * as types from '../schema/types'

const schema = makeSchema({
  types,
  outputs: {
    typegen: Path.join(
      __dirname,
      '../../node_modules/@types/typegen-nexus/index.d.ts',
    ),
    schema: __dirname + '/../schema/schema.graphql',
  },
  contextType: {
    module: Path.join(__dirname, '../context.ts'),
    export: 'Context',
  },
})
export default schema
