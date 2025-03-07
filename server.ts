import { serve } from 'bun'
import index from './src/index.html'

let count = 0

const server = serve({
  development: process.env.NODE_ENV !== 'production',
  port: 3005,
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,

    '/api/get-count': {
      async GET(req) {
        return Response.json({ count })
      },
    },

    '/api/count-plus': async req => {
      count++
      return Response.json({ count })
    },
  },
})

console.log(`🚀 Server running at ${server.url}`)
