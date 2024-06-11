import { getSystemToolList } from '@/api/tools'
import hot from '@/assets/images/hot.png'
import { useEffect } from 'react'

export const Hot: React.FC = () => {
    useEffect(()=>{
        getSystemToolList({
            page: 1,
            size: 100,
            type: 'tools'
        })
    },[])
    return (
        <div className='hot app-design'>
            <div className='hot-item'>
                <img src={hot} alt="" />
                <div className='hot-item-title'>多组学</div>
                <div className='more'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white" />
                        <path d="M15 20L19 16L15 12" stroke="#181D28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='hot-tools'>
                    <div className='hot-tool-item'>
                        <img src="" alt="" />
                        <div className='tool-text'>
                            <div className='tool-title'></div>
                            <div className='tool-desc'>desc</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hot-item'>
                <img src={hot} alt="" />
                <div className='hot-item-title'>云工具</div>
                <div className='more'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white" />
                        <path d="M15 20L19 16L15 12" stroke="#181D28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='hot-tools'>
                    <div className='hot-tool-item'></div>
                </div>
            </div>
        </div>
    )
}