const images = import.meta.glob('@/assets/cooperation/*.png', { import: 'default' })
const sources = Object.keys(images)

function chunkArray(array: string[]) {
    const third = Math.ceil(array.length / 3);
    const first = array.slice(0, third);
    const second = array.slice(third, 2 * third);
    const thirdPart = array.slice(2 * third);

    return [first, second, thirdPart];
}

const cooperations = chunkArray(sources)
const getImageUrl = (item: string) => {
    if (import.meta.env.MODE !== "development") {
        return '/images/' + item.split('/').pop()
    }
    return item
}


export const Cooperation: React.FC = () => {
    return (
        <div className='cooperation'>
            <div className='cooperation-title'>深耕科研服务，历经 {new Date().getFullYear() - 2013} 年不变初心</div>
            <div className='cooperation-desc'>高校、科研院所、企业等各行各业与华智生物携手前行</div>
            {cooperations.map((it, index) => (
                <div className='cooperation-items' key={index} style={{ width: it.length * 240, animationDuration: `${index === 0 ? '10s' : index * 10}s` }}>
                    {it.map((it, i) => <img key={i} className='cooperation-item' src={getImageUrl(it)} />)}
                </div>
            ))}
        </div>
    )
}