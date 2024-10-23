'use client'
import Link from 'next/link';

const Page = () => {
  

  return (
    <>
      {/*<h2>Recharts</h2>
      <div style={{ padding: '100px', alignItems: 'center'}}>
        <p>role='application'の場合</p>
        <ul>
          <li><Link href="/Recharts/application/pie">円グラフ</Link></li>
          <li><Link href="/Recharts/application/party">政党支持率</Link></li>
          <li><Link href="/Recharts/application/cabinet">内閣支持率</Link></li>
        </ul>
        <p style={{ marginTop: 10 }}>role='img'の場合</p>
        <ul>
          <li><Link href="/Recharts/img/pie">円グラフ</Link></li>
          <li><Link href="/Recharts/img/party">政党支持率</Link></li>
          <li><Link href="/Recharts/img/cabinet">内閣支持率</Link></li>
        </ul>
        <p style={{ marginTop: 10 }}>500件の場合（role='application'）</p>
        <ul>
          <li><Link href="/Recharts/500/cabinet/brush">内閣支持率（ブラシ）</Link></li>
          <li><Link href="/Recharts/500/cabinet/scroll">内閣支持率（スクロールバー）</Link></li>
        </ul>
      </div>
      <h2>react-chartjs-2</h2>
      <div style={{ padding: '100px', alignItems: 'center'}}>
        <p>role='img'の場合</p>
        <ul>
          <li><Link href="/chartjs/party">政党支持率</Link></li>
          <li><Link href="/chartjs/cabinet">内閣支持率</Link></li>
        </ul>
      </div>
      */}
      <div style={{ padding: '100px', alignItems: 'center'}}>
        <h2>サンプル</h2>
        <ul>
          <li><Link href="/chartjs/cabinet">react-chartjs-2で作成した内閣支持率のグラフ</Link></li>
          <li><Link href="/Recharts/500/cabinet/brush">Rechartsで作成した内閣支持率のグラフ</Link></li>
        </ul>
      </div>
    </>
    
  )
}
export default Page

