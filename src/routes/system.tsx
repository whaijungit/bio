import Layout from '@/views/layout'
import { Suspense, lazy } from 'react'
import { done, start } from 'nprogress'
import { Link, path_link } from '@/common'
import { RouteObject } from 'react-router-dom'

const Users = lazy(async () => {
    start()
    const com = await import('@/views/system/users')
    done()
    return com;
})

const Roles = lazy(async () => {
    start()
    const com = await import('@/views/system/roles')
    done()
    return com;
})

const Permission = lazy(async () => {
    start()
    const com = await import('@/views/system/permission')
    done()
    return com;
})

export const Tools = lazy(async () => {
    start()
    const com = await import('@/views/system/tools')
    done()
    return com
})

export const Operation = lazy(async () => {
    start()
    const com = await import('@/views/system/operations')
    done()
    return com
})

export const Files = lazy(async () => {
    start()
    const com = await import('@/views/system/files')
    done()
    return com
})

export const Options = lazy(async () => {
    start()
    const com = await import('@/views/system/options')
    done()
    return com
})

export const Configs = lazy(async () => {
    start()
    const com = await import('@/views/system/configs')
    done()
    return com;
})


export const Projects = lazy(async () => {
    start()
    const com = await import('@/views/system/projects')
    done()
    return com
})


export const system_routes: RouteObject[] = [
    {
        element: <Layout />,
        path: '/' + Link.system,
        children: [
            {
                path: path_link.system_users,
                element: (
                    <Suspense>
                        <Users />
                    </Suspense>
                )
            },
            {
                path: path_link.system_roles,
                element: (
                    <Suspense>
                        <Roles />
                    </Suspense>
                )
            },
            {
                path: path_link.system_permission,
                element: (
                    <Suspense>
                        <Permission />
                    </Suspense>
                )
            },
            {
                path: path_link.system_tools,
                element: (
                    <Suspense>
                        <Tools />
                    </Suspense>
                )
            },
            {
                path: path_link.system_operations,
                element: (
                    <Suspense>
                        <Operation />
                    </Suspense>
                )
            },
            {
                path: path_link.system_files,
                element: (
                    <Suspense>
                        <Files />
                    </Suspense>
                )
            },
            {
                path: path_link.system_options,
                element: (
                    <Suspense>
                        <Options />
                    </Suspense>
                )
            },
            {
                path: path_link.system_projects,
                element: (
                    <Suspense>
                        <Projects />
                    </Suspense>
                )
            },
            {
                path: path_link.system_configs,
                element: (
                    <Suspense>
                        <Configs />
                    </Suspense>
                )
            },
        ]
    }
]