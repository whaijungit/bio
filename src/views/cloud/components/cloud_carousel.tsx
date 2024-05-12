import { Button } from 'antd'
import banner from './test.png'
import { useState } from 'react'

interface Banner {
    id: number
    sort: number
    desc: string
    title: string
    link: string
    img_url: string
}
const banners: Banner[] = [
    {
        id: 0,
        sort: 1,
        link: '',
        img_url: banner,
        title: '丰富的工具类型',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离'
    },
    {
        id: 1,
        sort: 2,
        link: '',
        img_url: banner,
        title: '微生物多组学分析',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离'
    },
    {
        id: 2,
        sort: 2,
        link: '',
        img_url: banner,
        title: '宏基因组可视化分析',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离'
    },
    {
        id: 3,
        sort: 2,
        link: '',
        img_url: banner,
        title: '全基因组关联分析',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离'
    }
]




export const CarouselItem: React.FC<Banner & { index: number }> = ({ title, desc }) => {
    return (
        <div className='carousel-item'>
            <img src={banner} alt="" />
            <div className='carousel-text'>
                <div className='carousel-title'>{title}</div>
                <div className='carousel-desc'>{desc}</div>
                <div className='carousel-btn'>
                    <Button type='primary'>查看</Button>
                </div>
            </div>
        </div>
    )
}

export const CloudCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='carousel-wrapper'>
            <div className='carousel-box'>
                <div className='carousel-list' style={{ display: 'flex' }}>
                    {banners.map((b, index) => (
                        <div
                            key={b.id}
                            className={`${activeIndex === index ? 'active ' : ''}carousel-item`}
                        >
                            <img src={banner} alt="" />
                            <div className='carousel-text'>
                                <div className='carousel-title'>{b.title}</div>
                                <div className='carousel-desc'>{b.desc}</div>
                                <div className='carousel-btn'>
                                    <Button type='primary'>查看</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='indcator'>
                    {banners.map((b, index) => (
                        <div onClick={() => setActiveIndex(index)} key={b.id} className={`indcator-item${activeIndex === index ? ' active' : ''}`}>{b.title}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
