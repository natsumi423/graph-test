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

const headers = ['支持', '不支持', '無回答'];

const text = '内閣支持率は' + data.map(item => {
  return `${item.name}は支持${item.支持}%、不支持${item.不支持}%、無回答${item.無回答}%`;
}).join('、') + '。';

const CustomizedShape = (props) => {
  const { cx, cy, 支持 } = props;
  return (
    <g>
      <rect x={cx - 10} y={cy - 10} width={20} height={20} fill="blue" />
      <text x={cx} y={cy} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {支持}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" role="status" aria-live="assertive">
        <p className="custom-tooltip__label">{label}</p>
        <ul className="custom-tooltip__list">
          <li className="custom-tooltip__item" style={{ color: '#413ea0' }}>{`${payload[0].dataKey} : ${payload[0].value}%`}</li>
          <li className="custom-tooltip__item" style={{ color: 'blue' }}>{`${payload[1].dataKey} : ${payload[1].value}%`}</li>
          <li className="custom-tooltip__item" style={{ color: 'red' }}>{`${payload[2].dataKey} : ${payload[2].value}%`}</li>
        </ul>
      </div>
    );
  }

  return null;
};

export default class LineBarAreaComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="80%">
          <ComposedChart
            role='img'
            aria-label="内閣支持率のグラフ"
            aria-describedby="chart-description"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            accessibilityLayer
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickCount={11}/> {/* Y軸の範囲を0〜100に設定し、10間隔に近い目盛りに */}
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="無回答" barSize={20} fill="#413ea0" />
            <Line type="linear" dataKey="支持" stroke="blue"/>
            <Line type="linear" dataKey="不支持" stroke="red" />
            <Scatter dataKey="支持" shape={<CustomizedShape />} legendType="none"/>
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
            内閣支持率
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
