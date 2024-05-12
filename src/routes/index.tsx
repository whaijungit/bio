import { useState } from 'react'
import { app_routes } from './config'
import { useRoutes } from 'react-router-dom'

const RouterView: React.FC = () => {
    const [routes, _] = useState(app_routes)
    const element = useRoutes(routes)

    return element
}

export default RouterView;
