import { EChartsType, init } from "echarts"
import { useEffect, useRef } from "react"

const options = {
    tooltip: {
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '95%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
            },
            emphasis: {
                
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 22, name: 'falied',itemStyle: {
                    color: '#FF3D3D'
                } },
                { value: 200, name: 'success' ,itemStyle: {
                    color: '#18C04C'
                } },
                { value: 111, name: 'runing',itemStyle: {
                    color: '#00B2FF'
                }  },
            ]
        }
    ]
}

export const Pie: React.FC = () => {
    const dom = useRef<HTMLDivElement>(null!)
    const chart = useRef<EChartsType>()
    useEffect(() => {
        if (dom.current) {
            chart.current = init(dom.current)
            chart.current.setOption(options)
        }
    }, [dom.current])
    return (
        <div ref={dom} style={{ width: 222, height: 222 }} className='chart pie'>
        </div>
    )
}