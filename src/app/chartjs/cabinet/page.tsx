'use client'

import dynamic from 'next/dynamic';
import { LineBarAreaComposedChart } from '../../components/chartjs/cabinet/LineBarAreaComposedChart';

// クライアントサイド限定で`chart-with-zoom`をインポート
const ChartZoom = dynamic(() => import('../../components/chartjs/cabinet/LineBarAreaComposedChart'), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
const Page = () => {
  return (
    <div style={{ width: '100%',padding: '50px', height: '100vh', textAlign: "center" }}>
      <ChartZoom />
    </div>
  )
}
export default Page