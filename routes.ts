import * as nextRoutes from 'next-routes'

const routes = (nextRoutes as any)()

routes.add('home', '/dishes', 'Dishes/Dishes')
routes.add('dish', '/dish/:slug', 'Dish/Dish')

export const Link = routes.Link
export const Router = routes.Router
export default routes


// routes.add('home', '/home', 'Home/HomeIndex/HomeIndex');