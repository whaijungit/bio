import Layout from '@/views/layout'
import { Suspense, lazy } from 'react'
import { done, start } from 'nprogress'
import { Link, path_link } from '@/config'
import { RouteObject } from 'react-router-dom'

const TaskAnalysisTools = lazy(async () => {
    start()
    const com = await import('@/views/task/analysis_tools')
    done()
    return com;
})

const TaskAnalysisProjects = lazy(async () => {
    start()
    const com = await import('@/views/task/analysis_projects')
    done()
    return com;
})

const TaskDataProjects = lazy(async () => {
    start()
    const com = await import('@/views/task/data_projects')
    done()
    return com;
})


const TaskDataTools = lazy(async () => {
    start()
    const com = await import('@/views/task/data_tools')
    done()
    return com;
})

const TaskDashbord = lazy(async () => {
    start()
    const com = import('@/views/task/dashbord')
    done()
    return com;
})

export const task_routes: RouteObject[] = [
    {
        path: Link.task,
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense>
                        <TaskDashbord />
                    </Suspense>
                )
            },
            {
                path: path_link.task_analysisTools,
                element: (
                    <Suspense>
                        <TaskAnalysisTools />
                    </Suspense>
                )
            },
            {
                path: path_link.task_analysis_projects,
                element: (
                    <Suspense>
                        <TaskAnalysisProjects />
                    </Suspense>
                )
            },
            {
                path: path_link.task_data_projects,
                element: (
                    <Suspense>
                        <TaskDataProjects />
                    </Suspense>
                )
            },
            {
                path: path_link.task_data_tools,
                element: (
                    <Suspense>
                        <TaskDataTools />
                    </Suspense>
                )
            },

        ]
    }
]