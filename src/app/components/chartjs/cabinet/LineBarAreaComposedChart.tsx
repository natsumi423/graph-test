import React from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  zoomPlugin
);

const originalLabelData = [
    '1947年02月17日 鳩山',
    '1948年01月28日 岸',
    '1948年12月27日 芦田',
    '1948年04月24日 芦田',
    '1947年04月05日 岸',
    '1947年06月03日 岸',
    '1948年03月26日 吉田',
    '1948年06月11日 吉田',
    '1947年10月15日 鳩山',
    '1947年06月14日 芦田',
]/*.map(l =>
    l.replace('ー', '｜')
      .replace('-', 'ｌ')
      .replace('(', '⌒')
      .replace('（', '⌒')
      .replace(')', '‿')
      .replace('）', '‿')
      .split('')
  )*/

const originalData1 = [69, 57, 23, 31, 19, 55, 40, 34, 47, 39];
const originalData2 = [15, 19, 40, 36, 50, 41, 7, 20, 10, 80];
const originalData3 = [10, 9, 6, 50, 80, 21, 18, 30, 40, 34];

const labels = [];
const data1 = [];
const data2 = [];
const data3 = [];

for (let i = 0; i < 50; i++) {
    labels.push(...originalLabelData);
    data1.push(...originalData1);
    data2.push(...originalData2);
    data3.push(...originalData3);
}

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: '支持',
      borderColor: 'blue',
      borderWidth: 2,
      fill: false,
      data: data1,
      pointStyle: 'rect'
    },
    {
        type: 'line' as const,
        label: '不支持',
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
        data: data2,
    },
    {
      type: 'bar' as const,
      label: '無回答',
      backgroundColor: 'grey',
      data: data3,
      borderColor: 'white',
      borderWidth: 2
    }
  ],
};

const options = {
  onClick: (e, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;

      const url = 'https://www.google.com/?q=' + labels[index];
      if (url) {
        window.location.href = url;
      }
    }
  },
    scales: {
        x: {
            autoSkip: false, // ラベルが重ならないように設定
            maxRotation: 0, // 最大回転を0に設定
            minRotation: 0, // 最小回転を0に設定
        },
        y: {
            beginAtZero: true, // Y 軸をゼロから始める
            min: 0, // 最小値
            max: 100, // 最大値
            /*ticks: {
                callback: (value) => `${value}%`, // Y 軸の目盛りに % を追加
            },*/
        },
    },
    interaction: {
        intersect: false,
        mode: 'index',
      },
    plugins: {
        zoom: {
            pan: {
                enabled: true, // パンを有効にする
                mode: 'x', // xy方向でパンを許可
                modifierKey: 'ctrl' // Ctrlキーでパン
            },
            zoom: {
                mode: 'x', // xy方向でズームを許可
                wheel: {
                    enabled: true, // マウスホイールでズームを有効にする
                    modifierKey: 'ctrl' // Ctrlキーでズーム
                },
                pinch: {
                    enabled: true       // Enable pinch zooming
                },
                drag: {
                    enabled: true, // ドラッグによるズームを有効にする
                },
            }
        }
        
      }
};

export function LineBarAreaComposedChart() {
  return <Chart role='img' aria-label='内閣支持率のグラフ' type='bar' data={data} options={options}/>;
}
