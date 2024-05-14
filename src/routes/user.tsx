import Layout from '@/views/layout'
import { path_link } from '@/config'
import { Suspense, lazy } from 'react'
import { done, start } from 'nprogress'
import { RouteObject } from 'react-router-dom'

const Personal = lazy(() => {
    start()
    const com = import('@/views/users/personal')
    done()
    return com
})

const Borad = lazy(() => {
    start()
    const com = import('@/views/users/board')
    done()
    return com
})

const Message = lazy(() => {
    start()
    const com = import('@/views/users/message')
    done()
    return com
})

const Feedback = lazy(() => {
    start()
    const com = import('@/views/users/feedback')
    done()
    return com
})

export const user_routes: RouteObject[] = [
    {
        path: path_link.message,
        element: <Layout />,
        children: [

            {
                index: true,
                element: (
                    <Suspense>
                        <Message />
                    </Suspense>
                )
            },
            {
                path: path_link.message_feedback,
                element: (
                    <Suspense>
                        <Feedback />
                    </Suspense>
                )
            },
            {
                path: path_link.message_borad,
                element: (
                    <Suspense>
                        <Borad />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: path_link.user,
        element: (
            <Suspense>
                <Personal />
            </Suspense>
        )
    },
]