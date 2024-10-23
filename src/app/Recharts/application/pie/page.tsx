'use client'
import PieChartWithCustomizedLabel from "../../../components/Recharts/application/PieChartWithCustomizedLabel"

const Page = () => {
  return (
    <div style={{ padding: '50px', height: '100vh', textAlign: "center" }}>
      <p>role='application'の場合</p>
      <PieChartWithCustomizedLabel />
    </div>
  )
}
export default Page
