import { ReactNode } from 'react'
import more from '@/assets/icon/more.svg'

interface TaskDashbordItemProps {
    title?: ReactNode
    task_list?: any[]
}

export const TaskDashbordItem: React.FC<TaskDashbordItemProps> = (props) => {
    const { title, task_list } = props

    const renderTaskList = () => {
        return task_list?.map((_, index,) => {
            return (
                <div key={index} className='task-item'>
                    <div className='task-item-text'>
                        <div className='task-item-text-title'>宏基因组-2023-06-01-17-330</div>
                        <div className='task-item-text-anno'>
                            <span>06f74bd1-fbb4-4fbc-91d4-e5a15ddd2bae</span>
                            <span>2023-06-01 12:05:34</span>
                        </div>
                    </div>
                    <div className='task-item-statu'>
                        <div className='task-item-title'>宏基因组</div>
                        <div className='task-item-status'>成功</div>
                    </div>
                    <div className='action-item'>分析报告</div>
                    <div className='action-item'>项目数据</div>
                </div>
            )
        })

    }

    return (
        <div className='dashbord-item'>
            <div className='dashbord-title'>
                {title && <div className='dashbord-title-text'>最近任务</div>}
                <div className='dashbord-title-more'>
                    <span>更多</span>
                    <img src={more} alt="" />
                </div>
            </div>
            <div className='dashbord-task-list'>
                {renderTaskList()}
            </div>
        </div >
    )
}