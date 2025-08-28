import React from 'react'
import Header from './components/Header.jsx'
import LandPage1 from './components/LandPage1.jsx'
import HIW from './components/HIW.jsx'
import WIH from './components/WIH.jsx'
import Gamification from './components/Gamification.jsx'
import ExOfHints from './components/ExOfHints.jsx'
import ScienceSays from './components/ScienseSays.jsx'
import ChooseYourPlan from './components/ChooseYourPlan.jsx'
import GetStartedToday from './components/GetStartedToday.jsx'
import PartnerWithHints from './components/PartnerWithHints.jsx'
import Footer from './components/Footer.jsx'
// import './index.css';
// ...existing code...
const Landinglayout = () => {
  return (
    <div> 
       <Header></Header> 
      <LandPage1></LandPage1>
      <WIH></WIH>
      <HIW></HIW>
      <Gamification></Gamification>
      <ExOfHints></ExOfHints>
      <ScienceSays></ScienceSays>
      <ChooseYourPlan></ChooseYourPlan>
      <GetStartedToday></GetStartedToday>
      <PartnerWithHints></PartnerWithHints>
      <Footer></Footer>
       

    </div>
  )
}

export default Landinglayout