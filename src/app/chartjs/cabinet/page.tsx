'use client'
import { LineBarAreaComposedChart } from '../../components/chartjs/cabinet/LineBarAreaComposedChart';


const Page = () => {
  return (
    <div style={{ width: '100%',padding: '50px', height: '100vh', textAlign: "center" }}>
      <LineBarAreaComposedChart />
    </div>
  )
}
export default Page