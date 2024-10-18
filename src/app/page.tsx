'use client'
import Link from 'next/link';

const Page = () => {
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '100px', alignItems: 'center' }}>
      <Link href="/pie">円グラフ</Link>
      <Link href="/party">政党支持率</Link>
      <Link href="/cabinet">内閣支持率</Link>

      {/* altタグがないのでエラーになる */}
      <img src=''></img>
    </div>
  )
}
export default Page

