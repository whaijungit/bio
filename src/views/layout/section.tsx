import { Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { useRouteState } from '@/compisition/userRouteState';

const Section: React.FC = () => {
    const { routeState } = useRouteState()

    if (routeState.hasAside) {
        return (
            <section className='section section-aside-layout'>
                <aside className='main-aside'>
                    <div className='aside-title'>{routeState.title}</div>
                    <div className='aside-menu'>
                        <Menu
                            mode='inline'
                            items={routeState.menus}
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
