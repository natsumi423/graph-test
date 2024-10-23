'use client'
import ImgPieChartWithCustomizedLabel from "../../../components/Recharts/img/PieChartWithCustomizedLabel"

const Page = () => {
  return (
    <>
      <div id='img' style={{ padding: '50px', height: '100vh', textAlign: "center" }}>
        <p>role='img'の場合</p>
        <ImgPieChartWithCustomizedLabel />
      </div>
    </>
  )
}
export default Page
