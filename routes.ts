import * as nextRoutes from 'next-routes'

const routes = (nextRoutes as any)()

routes.add('recipe', '/recipe/:slug', 'dish')

export const Link = routes.Link
export const Router = routes.Router
export default routes


// routes.add('home', '/home', 'Home/HomeIndex/HomeIndex');