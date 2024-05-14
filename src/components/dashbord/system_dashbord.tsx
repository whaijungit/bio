import classNames from './system_dashbord.module.less'

export const DashbordLayout:React.FC = () =>{
    return (
        <section className={classNames.system_dashbord}>
            <div className={classNames.system_dashbord_item}></div>
            <div className={classNames.system_dashbord_item}></div>
            <div className={classNames.system_dashbord_item}></div>
        </section>
    )
}

