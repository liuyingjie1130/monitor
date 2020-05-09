// 引入相关的组件
import { Component} from 'react';
import { connect } from 'dva';
import { Chart, Axis, Tooltip, Geom,Legend, } from 'bizcharts';

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
const data = [
    {
        month: "Jan",
        city: "Tokyo",
        temperature: 7
    },
    {
        month: "Jan",
        city: "London",
        temperature: 3.9
    },
    {
        month: "Feb",
        city: "Tokyo",
        temperature: 6.9
    },
    {
        month: "Feb",
        city: "London",
        temperature: 4.2
    },
    {
        month: "Mar",
        city: "Tokyo",
        temperature: 9.5
    },
    {
        month: "Mar",
        city: "London",
        temperature: 5.7
    },
    {
        month: "Apr",
        city: "Tokyo",
        temperature: 14.5
    },
    {
        month: "Apr",
        city: "London",
        temperature: 8.5
    },
    {
        month: "May",
        city: "Tokyo",
        temperature: 18.4
    },
    {
        month: "May",
        city: "London",
        temperature: 11.9
    },
    {
        month: "Jun",
        city: "Tokyo",
        temperature: 21.5
    },
    {
        month: "Jun",
        city: "London",
        temperature: 15.2
    },
    {
        month: "Jul",
        city: "Tokyo",
        temperature: 25.2
    },
    {
        month: "Jul",
        city: "London",
        temperature: 17
    },
    {
        month: "Aug",
        city: "Tokyo",
        temperature: 26.5
    },
    {
        month: "Aug",
        city: "London",
        temperature: 16.6
    },
    {
        month: "Sep",
        city: "Tokyo",
        temperature: 23.3
    },
    {
        month: "Sep",
        city: "London",
        temperature: 14.2
    },
    {
        month: "Oct",
        city: "Tokyo",
        temperature: 18.3
    },
    {
        month: "Oct",
        city: "London",
        temperature: 10.3
    },
    {
        month: "Nov",
        city: "Tokyo",
        temperature: 13.9
    },
    {
        month: "Nov",
        city: "London",
        temperature: 6.6
    },
    {
        month: "Dec",
        city: "Tokyo",
        temperature: 9.6
    },
    {
        month: "Dec",
        city: "London",
        temperature: 4.8
    }
  ];
class Data extends Component {
    render(){
        return(
            <div>
                <Chart
                width={ 950 }
                height={ 550 }
                data={this.props.data}
                forceFit
                >
                    <Legend />
          <Axis name="month" />
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
                    {/* x轴，横轴，以data数据的xAxis属性值为柱子的值 */}
                    <Axis name="xAxis" />
                    {/* y轴，纵轴，以data数据的yAxis属性值为柱子的值 */}
                    <Axis name="yAxis" />
                    {/* 鼠标hover直方图柱子的时候，tooltip显示的值 */}
                    <Tooltip />
                    {/* 几何标记对象，主要用以描述你要画的是什么图形（直方图、折线图、饼状图、区域图）：interval是直方图 */}
                    <Geom
                        type="point"
                        // position="xAxis*yAxis"
                        position="month*temperature"
                        shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
                    />
                </Chart>
            </div>
        );
    }
}
export default connect(({his})=>(his))(Data)
