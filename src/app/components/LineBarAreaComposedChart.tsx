import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
    {
      name: '1947年7月11日',
      支持: 69,
      不支持: 19,
      無回答: 5,
    },
    {
      name: '1947年9月11日',
      支持: 20,
      不支持: 50,
      無回答: 10,
    },
    {
      name: '1947年10月11日',
      支持: 30,
      不支持: 20,
      無回答: 20,
    },
    {
      name: '1947年11月11日',
      支持: 19,
      不支持: 30,
      無回答: 10,
    },
    {
      name: '1948年10月11日',
      支持: 45,
      不支持: 20,
      無回答: 50,
    },
    {
      name: '1948年10月12日',
      支持: 50,
      不支持: 19,
      無回答: 30,
    },
    {
      name: '1949年10月12日',
      支持: 20,
      不支持: 20,
      無回答: 40,
    },
];

export default class LineBarAreaComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={11}/> {/* Y軸の範囲を0〜100に設定し、10間隔に近い目盛りに */}
          <Tooltip />
          <Legend />
          <Bar dataKey="無回答" barSize={20} fill="#413ea0" />
          <Line type="linear" dataKey="支持" stroke="blue" />
          <Line type="linear" dataKey="不支持" stroke="red" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
