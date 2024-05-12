import { Pie } from '../chart'
import size from '@/assets/images/size.png'

export const TaskDashbordRight: React.FC = () => {
    return (
        <div className='dashbord-right'>
            <div className='dashbord-card-item size'>
                <div className='card-title'>空间</div>
                <img src={size} alt="" />
                <div className='size-value'>
                    <div className='used'>133MB</div>
                    <div className='free'>/9.4GB</div>
                </div>
            </div>
            <div className='dashbord-card-item tool'>
                <div className='card-title'>常用工具</div>
                <div className='tool-card'>
                </div>
            </div>
            <div className='dashbord-card-item record'>
                <div className='card-title'>工具任务统计</div>
                <div className='card-chart-container'>
                    <Pie />
                </div>
                <div className='record-items'>
                    <div className='record-item runing'>
                        <div className='record-item-value'>16</div>
                        <div className='record-item-label'>进行中</div>
                    </div>
                    <div className='record-item success'>
                        <div className='record-item-value'>128</div>
                        <div className='record-item-label runing'>成功</div>
                    </div>
                    <div className='record-item failed'>
                        <div className='record-item-value'>4</div>
                        <div className='record-item-label runing'>失败</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

