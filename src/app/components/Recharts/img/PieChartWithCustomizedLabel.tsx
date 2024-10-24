import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'はい', value: 20 },
  { name: 'いいえ', value: 50 },
  { name: '不明', value: 30 },
];

const text = '〜〜ですか？' + `${data[0].name}:${data[0].value}%、${data[1].name}:${data[1].value}%、${data[2].name}:${data[2].value}%`

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

export default class PieChartWithCustomizedLabel extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="80%">
        <PieChart width={400} height={400} accessibilityLayer role='img' aria-label="円グラフ" aria-describedby="chart-description">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              pointerEvents="none" // クリックした時にハイライトされないように
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p id="chart-description" className='sr-only'>
          {text}
        </p>
        <table
          style={{
            width: '50%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
            margin: '0 auto',
          }}
        >
          <caption>
            〜〜ですか？
          </caption>
          <thead>
            <tr>
              <th>回答</th>
              <th>値</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
