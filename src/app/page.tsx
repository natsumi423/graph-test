'use client'
import SimpleLineChart from "./components/SimpleLineChart" //折れ線
import LineBarAreaComposedChart from "./components/LineBarAreaComposedChart" //内閣支持率
import VerticalComposedChart from "./components/VerticalComposedChart" //政党支持率
import PieChartWithCustomizedLabel from "./components/PieChartWithCustomizedLabel" //円

const Page = () => {
  

  return (
    <>
      <div style={{ height: 600 }}>
        <VerticalComposedChart />
      </div>
    </>
  )
}
export default Page

