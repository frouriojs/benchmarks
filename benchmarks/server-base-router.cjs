'use strict'

require('node:http')
  .createServer(
    require('server-base-router')({
      '@setup' (ctx) {
        ctx.middlewareFunctions = []
      },
      '/': {
        get (_req, res) {
          res.setHeader('content-type', 'application/json; charset=utf-8')
          res.json({ hello: 'world' })
        }
      }
    })
  )
  .listen(3000)
