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
    社会: 0,
    支持なし: 0,
  },
  {
    name: '1949年10月13日',
    自民: 40,
    共産: 50,
    社会: 0,
    支持なし: 10,
  },
  {
    name: '1949年10月14日',
    自民: 20,
    共産: 20,
    社会: 0,
    支持なし: 60,
  },
  {
    name: '1949年10月15日',
    自民: 50,
    共産: 30,
    社会: 0,
    支持なし: 20,
  },
  {
    name: '1949年10月16日',
    自民: 80,
    共産: 0,
    社会: 0,
    支持なし: 20,
  },
  {
    name: '1949年10月17日',
    自民: 70,
    共産: 0,
    社会: 20,
    支持なし: 10,
  },
];

const headers = ['自民', '共産', '社会', '支持なし'];

const text = '政党支持率は' + data.map(item => {
  return `${item.name}は自民${item.自民}%、共産${item.共産}%、社会${item.社会}%、支持なし${item.支持なし}%`;
}).join('、') + '。';

export default class VerticalComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="80%">
          <ComposedChart
            role='img'
            aria-label="政党支持率のグラフ"
            aria-describedby="chart-description"
            layout="vertical"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 100,
            }}
            accessibilityLayer
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
        <p id="chart-description" className='sr-only'>
          {text}
        </p>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
          }}
        >
          <caption>
            政党支持率
          </caption>
          <thead>
            <tr>
              <td></td>
              {data.map((item, colIndex) => (
                <th key={colIndex}>
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {headers.map((key, rowIndex) => (
              <tr key={rowIndex}>
                <th scope='row'>{headers[rowIndex]}</th>
                {data.map((item, colIndex) => (
                  <td key={colIndex}>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
