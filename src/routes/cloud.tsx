import { Link } from '@/config'
import { RouterItems } from '.'
import Layout from '@/views/layout'
import { Suspense, lazy } from 'react'
import { start, done } from 'nprogress'

const Home = lazy(async () => {
    start()
    const com = await import('@/views/cloud/home')
    done()
    return com;
})

const Tools = lazy(async () => {
    start()
    const com = await import('@/views/cloud/tools')
    done()
    return com;
})

const ToolDetail = lazy(async () => {
    start()
    const com = await import('@/views/cloud/tool_detail')
    done()
    return com;
})

export const Groups = lazy(async () => {
    start()
    const com = await import('@/views/cloud/groups')
    done()
    return com
})

export const GroupDetail = lazy(async () => {
    start()
    const com = await import('@/views/cloud/group_detail')
    done()
    return com
})

export const cloud_routes: RouterItems[] = [
        {
            path: '/',
            meta: {
                auth: false,
            },
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense>
                            <Home />
                        </Suspense>
                    )
                },
                {
                    path: Link.tools,
                    element: (
                        <Suspense>
                            <Tools />
                        </Suspense>
                    )
                },
                {
                    path: Link.tools + '/:id',
                    element: (
                        <Suspense>
                            <ToolDetail />
                        </Suspense>
                    )
                },
                {
                    path: Link.groups,
                    element: (
                        <Suspense>
                            <Groups />
                        </Suspense>
                    )
                },
                {
                    path: Link.groups + '/:id',
                    element: (
                        <Suspense>
                            <GroupDetail />
                        </Suspense>
                    )
                }
            ]
        }

    ]