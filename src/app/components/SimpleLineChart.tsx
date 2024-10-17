import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1947年7月11日',
    支持: 69,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '1947年9月11日',
    支持: 20,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '1947年10月11日',
    支持: 30,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '1947年11月11日',
    支持: 19,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '1948年10月11日',
    支持: 45,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '1948年10月12日',
    支持: 50,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '1949年10月12日',
    支持: 20,
    pv: 4300,
    amt: 2100,
  },
];

export default class SimpleLineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} /> {/* Y軸の範囲を0〜100に設定 */}
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="支持" stroke="#82ca9d" /> {/* type:linear→直線 */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


