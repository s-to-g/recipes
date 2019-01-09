import * as next from 'next'
import * as express from 'express'
import routes from './routes'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
// const app = next({dev: process.env.NODE_ENV !== 'production'})

const app = next({
  dev,
  dir: './',
})

const handler = routes.getRequestHandler(app)

app
  .prepare()
  .then(() => {
    express()
      .use(handler)
      .listen(port)
  })
  .catch((error) => {
    console.log('e', error)
  })

