// 引入相关的组件
import { Component} from 'react';
import { connect } from 'dva';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

// str横坐标，mockData纵坐标
const str = ['1月', '2月', '3月', '4月', '5月'];
const mockData = () => {
    let result = [];
    for (let i = 0, len = 6; i < len; i++) {
        result.push({
            xAxis: str[i],
            yAxis: Math.floor(Math.random() * 10)
        });
    }

    return result;
};
class Data extends Component {
    render(){
        return(
            <div>
                <Chart
                width={ 800 }
                height={ 350 }
                data={ mockData() }
                forceFit
                >
                    {/* x轴，横轴，以data数据的xAxis属性值为柱子的值 */}
                    <Axis name="xAxis" />
                    {/* y轴，纵轴，以data数据的yAxis属性值为柱子的值 */}
                    <Axis name="yAxis" />
                    {/* 鼠标hover直方图柱子的时候，tooltip显示的值 */}
                    <Tooltip />
                    {/* 几何标记对象，主要用以描述你要画的是什么图形（直方图、折线图、饼状图、区域图）：interval是直方图 */}
                    <Geom
                        type="line"
                        position="xAxis*yAxis"
                    />
                </Chart>
            </div>
        );
    }
}
export default connect(({his})=>(his))(Data)
