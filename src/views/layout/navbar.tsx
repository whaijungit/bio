import { useState } from 'react'
import { Login } from '@/components/auth'
import { Link, path_link } from '@/config'
import { NavLink } from 'react-router-dom'
import brand from '@/assets/icon/brand.svg'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Login open={open} onClose={() => setOpen(false)} />
            <nav className='nav-bar'>
                <div className='nav-bar-item'>
                    <NavLink to={Link.index}>
                        <img src={brand} alt="" />
                    </NavLink>
                    <NavLink to={Link.index} className='nav-link-item'>首页</NavLink>
                    <NavLink to={path_link.group} className='nav-link-item'>多组学</NavLink>
                    <NavLink to={path_link.tools} className='nav-link-item'>云工具</NavLink>
                </div>
                <div className='nav-bar-item'>
                    <NavLink to={path_link.system} className='nav-link-item'>平台管理</NavLink>
                    <NavLink to={path_link.task} className='nav-link-item'>任务中心</NavLink>
                    <NavLink to={path_link.message} className='nav-link-item'>个人中心</NavLink>
                    <span onClick={() => setOpen(true)} className='nav-link-item'>登录</span>
                    <span className='nav-link-item register'>注册</span>
                </div>
            </nav>
        </>

    )
}

export default Navbar;
