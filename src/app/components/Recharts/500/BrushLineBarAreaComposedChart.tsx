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
  Brush
} from 'recharts';

import { data } from '@/app/constants/Recharts/cabinetData';

const renderCustomAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <a
        href={"https://www.google.com?q=" + payload.value}
        rel="noopener noreferrer"
        style={{ cursor: 'pointer' }}
        className="svg-link"
      >
        <text
          x={0}
          y={0}
          dy={200}
          textAnchor="end"
          style={{
            cursor: 'pointer',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fill: '#1a0dab',
          }}
          className="link-text"
        >
          <tspan
            style={{
              textDecoration: 'overline',
              textDecorationColor: '#1a0dab',
            }}
          >
            {payload.value}
          </tspan>
        </text>
      </a>
    </g>
  );
};


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
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            aria-label="内閣支持率のグラフ"
            data={data}
            width={1000}
            height={400}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 10,
            }}
            accessibilityLayer
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" height={250} tick={renderCustomAxisTick}/>
            <YAxis domain={[0, 100]} tickCount={11} /> {/* Y軸の範囲を0〜100に設定し、10間隔に近い目盛りに */}
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign='top' />
            <Bar dataKey="無回答" barSize={20} fill="#413ea0" />
            <Line type="linear" dataKey="支持" stroke="blue"/>
            <Line type="linear" dataKey="不支持" stroke="red" />
            <Scatter dataKey="支持" shape={<CustomizedShape />} legendType="none"/>
            <Brush dataKey="name" startIndex={1} endIndex={9}  />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  }
}
