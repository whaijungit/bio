export const Hot: React.FC = () => {
    return (
        <div className='hot app-design'>
            <div className='hot-item'>
                <div className='hot-item-title'>多组学</div>
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
            <div className='hot-item'>
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