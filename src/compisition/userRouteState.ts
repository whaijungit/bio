import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { message_menu, system_menu, task_menu } from '@/config'

export const useRouteState = () => {
    const location = useLocation()
    const [routeState, setRouteState] = useState<RouteState>({
        menus: [],
        title: '',
        hasAside: false,
    })

    useEffect(() => {
        if (location.pathname) {
            if (location.pathname.startsWith('/task')) {
                setRouteState({
                    hasAside: true,
                    title: '任务中心',
                    menus: task_menu!,
                })

            } else if (location.pathname.startsWith('/system')) {
                setRouteState({
                    hasAside: true,
                    title: '平台管理',
                    menus: system_menu!,
                })
            }
            else if (location.pathname.startsWith('/message')) {
                setRouteState({
                    title: '消息',
                    hasAside: true,
                    menus: message_menu!,
                })
            }
            else {
                setRouteState({
                    title: '',
                    menus: [],
                    hasAside: false,
                })
            }
        }
    }, [location])

    return {
        routeState,
    }
}