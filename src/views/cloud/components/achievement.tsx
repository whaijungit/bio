import achievement from '@/assets/images/achievement.png'

export const Achievement: React.FC = () => {
    return (
        <>
            <div className='achievement app-design'>
                <div className='achievement-title'>研发成果</div>
                <div className='achievement-items'>
                    <div className='achievement-item'>
                        <span className='achievement-item-value'>500+</span>
                        <span className='achievement-item-label'>知识产权申请</span>
                    </div>
                    <div className='achievement-item'>
                        <span className='achievement-item-value'>300+</span>
                        <span className='achievement-item-label'>知识产权授权</span>
                    </div>
                    <div className='achievement-item'>
                        <span className='achievement-item-value'>50+</span>
                        <span className='achievement-item-label'>专利授权</span>
                    </div>
                    <div className='achievement-item'>
                        <span className='achievement-item-value'>30+</span>
                        <span className='achievement-item-label'>高水平论文发表</span>
                    </div>
                    <div className='achievement-item'>
                        <span className='achievement-item-value'>10+</span>
                        <span className='achievement-item-label'>主持/参与重大科技项目</span>
                    </div>
                </div>
            </div>
            <div className='achievement-img'>
                <img src={achievement} alt="" />
            </div>
        </>
    )
}


