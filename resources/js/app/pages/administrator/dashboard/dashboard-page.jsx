import { useEffect } from "react";
import DashboardLineCartSection from "./sections/dashboard-line-cart-section";
import DashboardPeriodicTabSection from "./sections/dashboard-periodic-tab-section";
import { getAllAnalytics } from "./redux/dashboard-thunk";
import store from './../../../../store/store'
import { useSelector } from "react-redux";
export default function DashboardPage() {
  const { year,tab,analytics } = useSelector((state) => state.dashboard);
  useEffect(() => {
   store.dispatch(getAllAnalytics())
  }, [year,tab]);
  return (
    <div>
      <DashboardPeriodicTabSection />
      <DashboardLineCartSection 
      year={year}
      analytics={analytics}
       periodic={tab}/>
    </div>
  )
}
