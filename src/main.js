// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('skills'))

// 指定图表的配置项和数据
const option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'html', max: 10 },
            { name: 'css', max: 10 },
            { name: 'Vue', max: 10 },
            { name: 'JS', max: 10 },
            { name: 'React', max: 10 },
            { name: '沟通能力', max: 10 }
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [9, 7, 7, 8, 7, 8],
                name: '能力雷达'
            }
        ]
    }]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
