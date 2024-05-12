import { TaskDashbordItem, TaskDashbordRight } from '@/components/dashbord'

const TaskDashbord: React.FC = () => {
    return (
        <div style={{ display: 'flex', padding: 20, gap: 20 }}>
            <div style={{ width: 1220, display: 'flex', gap: 20, flexDirection: 'column', flex: '0 0 1200px' }}>
                <TaskDashbordItem task_list={new Array(5).fill(0)} title='最近项目任务' />
                <TaskDashbordItem task_list={new Array(5).fill(0)} title='最近工具任务' />
            </div>
            <div className='' style={{ width: 400, flex: '0 0 400px' }}>
                <TaskDashbordRight />
            </div>
        </div>
    )
}

export default TaskDashbord;
