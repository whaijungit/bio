import { cloud_routes } from './cloud'
import { system_routes } from './system'
import { RouteObject } from 'react-router-dom'
import { task_routes } from './task'
import { user_routes } from './user'

export const app_routes: RouteObject[] = [
    ...task_routes,
    ...user_routes,
    ...cloud_routes,
    ...system_routes,
]