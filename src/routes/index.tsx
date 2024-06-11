import { useState } from 'react'
import { app_routes } from './config'
import { useRoutes, RouteObject } from 'react-router-dom'

interface MetaRoute {
    meta: {
        auth: boolean
    }
}

export type RouterItems = MetaRoute & RouteObject

const RouterView: React.FC = () => {
    const [routes, _] = useState(app_routes)
    const element = useRoutes(routes)

    return element
}

export default RouterView;
