import code from '@/assets/images/code.png'
import style from '@/assets/images/code.png'
import track from '@/assets/images/track.png'
import payment from '@/assets/images/payment.png'
import dimensions from '@/assets/images/dimensions.png'

interface AdvantageItemProps {
    title: string
    desc: string[]
    img_url: string
}

export const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, desc, img_url }) => {
    return (
        <div className='advantage-item'>
            <div className='advantage-text'>
                <div className='advantage-title'>{title}</div>
                {desc.map(d => (
                    <div key={d} className='advantage-desc'>{d}</div>
                ))}
            </div>
            <img className='advantage-icon' src={img_url} alt="" />
        </div>
    )
}

export const Advantage: React.FC = () => {
    return (
        <div className='advantage app-design'>
            <AdvantageItem img_url={code} desc={['无需代码编程', '玩转数据分析']} title='零代码' />
            <AdvantageItem img_url={dimensions} desc={['超大存储', '超强算力']} title='大规模' />
            <AdvantageItem img_url={track} desc={['多段监控 动态化', '把握项目进展']} title='项目实时跟踪' />
            <AdvantageItem img_url={style} desc={['丰富的工具类型', '灵活的参数配置']} title='个性化' />
            <AdvantageItem img_url={payment} desc={['多种数据交互形式', '结果报告线上解读']} title='便捷交付' />
        </div>
    )
}