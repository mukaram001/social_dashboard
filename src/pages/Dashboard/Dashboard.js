import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navbar from '../../common/Navbar/Navbar'
import Analytics from '../../components/Analytics/Analytics'
import BreakingNews from '../../components/BreakingNews/BreakingNews'
import ChartsHeadline from '../../components/ChartsHeadline/ChartsHeadline'
import ExcelImages from '../../components/ExcelImages/ExcelImages'
import FacebookIsights from '../../components/FacebookIsights/FacebookIsights'
import ImagesArea from '../../components/ImagesArea/ImagesArea'
import SocialCard from '../../components/SocialCard/SocialCard'
import TheseAreMyCharts from '../../components/TheseAreMyCharts/TheseAreMyCharts'

const Dashboard = () => {
  return (
    <>
        <Navbar/>
        <SocialCard/>
        <FacebookIsights/>
        <Analytics/>
        <ChartsHeadline/>
        <TheseAreMyCharts/>
        <BreakingNews/>
        <ExcelImages/>
        <ImagesArea/>
        <Footer/>
    </>
  )
}

export default Dashboard