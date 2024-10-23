'use client'
import LineBarAreaComposedChart from "../../../../components/Recharts/500/BrushLineBarAreaComposedChart"

const Page = () => {
  return (
    <div style={{ padding: '50px', height: '100vh', textAlign: "center", width: '100%', }}>
      {/*<p>500件の場合（role='application'、ブラシ）</p>*/}
      <LineBarAreaComposedChart />
    </div>
  )
}
export default Page
