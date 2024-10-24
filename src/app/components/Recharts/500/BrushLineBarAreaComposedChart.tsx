import React, { PureComponent, useState } from 'react';
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
      <rect x={cx - 10} y={cy - 10} width={20} height={20} fill="#0554F2" />
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
          <li className="custom-tooltip__item" style={{ color: '#0554F2' }}>{`${payload[1].dataKey} : ${payload[1].value}%`}</li>
          <li className="custom-tooltip__item" style={{ color: '#D9048E' }}>{`${payload[2].dataKey} : ${payload[2].value}%`}</li>
          <li className="custom-tooltip__item" style={{ color: '#D9D9D9' }}>{`${payload[0].dataKey} : ${payload[0].value}%`}</li>
        </ul>
      </div>
    );
  }

  return null;
};

const CustomLegend = (props) => {
  const { payload } = props;

  const orderedPayload = [
    payload[1], // 支持
    payload[2], // 不支持
    payload[0], // 無回答
  ];

  return (
    <ul className="custom-legend" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'flex-start' }}>
      {orderedPayload.map((entry, index) => (
        <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', color: 'black', marginRight: '20px' }}>
          {/* アイコンの描画 */}
          <div style={{ width: '20px', height: '20px', marginRight: '5px' }}>
            {entry.dataKey === '無回答' ? (
              <div style={{ width: '100%', height: '100%', backgroundColor: entry.color }} /> // 四角形
            ) : (
              <div style={{ 
                width: '100%', 
                height: '2px', 
                backgroundColor: entry.color, 
                transform: 'rotate(0deg)', 
                marginTop: '10px'
              }} />
            )}
          </div>
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const LineBarAreaComposedChart = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(40);

    const interval = endIndex - startIndex > 40 ? undefined : 0;

    const handleBrushChange = (newBrush) => {
      // newBrushからstartIndexとendIndexを計算して設定
      setStartIndex(newBrush.startIndex);
      setEndIndex(newBrush.endIndex);
    };

    const handleZoomIn = () => {
      setEndIndex(endIndex + 1)
    };
    
    const handleZoomOut = () => {
      setEndIndex(endIndex - 1)
    };

    const isZoomOutDisabled = endIndex <= startIndex
    const isZoomInDisabled = data.length - 1 <= endIndex

    return (
      <>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button disabled={isZoomOutDisabled} onClick={handleZoomOut} style={{ backgroundColor: isZoomOutDisabled ? '#A9A9A9' : '#4D4D4D', color: '#ffffff', paddingLeft: 10, paddingRight:10 , paddingTop: 5, paddingBottom: 5, borderRadius: 4, border: 'none' }}>拡大</button>
          <button disabled={isZoomInDisabled} onClick={handleZoomIn} style={{ backgroundColor: isZoomInDisabled ? '#A9A9A9' : '#4D4D4D', color: '#ffffff', paddingLeft: 10, paddingRight:10 , paddingTop: 5, paddingBottom: 5, borderRadius: 4, border: 'none' }}>縮小</button>
        </div>

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
            <CartesianGrid stroke="#E8E8E8" vertical={false} />
            <XAxis dataKey="name" height={250} tick={renderCustomAxisTick} interval={interval} />
            <YAxis domain={[0, 100]} tickCount={11} /> {/* Y軸の範囲を0〜100に設定し、10間隔に近い目盛りに */}
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} verticalAlign='top' align="left" wrapperStyle={{paddingLeft: "20px", paddingBottom: "20px"}} />
            <Bar dataKey="無回答" barSize={15} fill="#D9D9D9" />
            <Line strokeWidth={1.5} type="linear" dataKey="支持" stroke="#0554F2"/>
            <Line strokeWidth={1.5} type="linear" dataKey="不支持" stroke="#D9048E" dot={false}/>
            <Scatter dataKey="支持" shape={<CustomizedShape />} legendType="none"/>
            <Brush dataKey="name" startIndex={startIndex} endIndex={endIndex} onChange={handleBrushChange} style={{ cursor: 'pointer' }}
            height={20} tickFormatter={() => ''} updateOnDrag={false} /*travellerWidth={0}*//>
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  }
export default LineBarAreaComposedChart
