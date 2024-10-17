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
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1949年10月12日',
    自民: 50,
    共産: 50,
    支持なし: 0,
  },
  {
    name: '1949年10月13日',
    自民: 40,
    共産: 50,
    支持なし: 10,
  },
  {
    name: '1949年10月14日',
    自民: 20,
    共産: 20,
    支持なし: 60,
  },
  {
    name: '1949年10月15日',
    自民: 50,
    共産: 30,
    支持なし: 20,
  },
  {
    name: '1949年10月16日',
    自民: 80,
    共産: 0,
    支持なし: 20,
  },
  {
    name: '1949年10月17日',
    自民: 70,
    社会: 20,
    支持なし: 10,
  },
];

export default class VerticalComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" domain={[0, 100]} tickCount={11} tickFormatter={(value) => `${value}%`}/>
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => `${value}%`}/>
          <Legend />
          <Bar dataKey="自民" stackId="seito" barSize={20} fill="#413ea0" />
          <Bar dataKey="共産" stackId="seito" fill="#8884d8" />
          <Bar dataKey="社会" stackId="seito" fill="red" />
          <Bar dataKey="支持なし" stackId="seito" fill="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
