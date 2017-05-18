import auth from './auth'

const routes = [auth]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
}
