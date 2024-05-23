import { Menu, MenuProps } from 'antd'
import { Outlet } from 'react-router-dom'
import { menuSlice, useMenu } from '@/store/menuSlice'
import { useRouteState } from '@/compisition/userRouteState'

const Section: React.FC = () => {
    const { routeState } = useRouteState()
    const { menuState, dispatch } = useMenu()

    const handleClickMenu: MenuProps['onClick'] = (info) => {
        dispatch(menuSlice.actions.setMenuSelectedKeys(info.keyPath))
    }

    if (routeState.hasAside) {
        return (
            <section className='section section-aside-layout'>
                <aside className='main-aside'>
                    <div className='aside-title'>{routeState.title}</div>
                    <div className='aside-menu'>
                        <Menu
                            mode='inline'
                            items={routeState.menus}
                            onClick={handleClickMenu}
                            selectedKeys={menuState.menuSelectKeys}
                        />
                    </div>
                </aside>
                <main className='main'><Outlet /></main>
            </section>
        )
    }
    return (
        <main className='section'>
            <Outlet />
        </main>
    )

}

export default Section;
