    import React from 'react'
    // import '../App.css';
    import Carousel from '../HomePages/Carousel';
    import Card from '../HomePages/Card';
    import WhyAdopt from "../HomePages/WhyAdopt.jsx";
    import MeetOurChildren from '../HomePages/MeetOurChildren.jsx';
    import HeroSection from '../HomePages/HeroSection.jsx';
    import AdditionalInfo from '../HomePages/AdditionalInfo.jsx';
    import AdoptionStoryPage from '../HomePages/AdoptionStoryPage.jsx';

    function Home() {
    return (
      <>
      <Carousel/>
      <Card/>
      <WhyAdopt/>
      <AdditionalInfo/>
      <MeetOurChildren/>
      <HeroSection/>
      <AdoptionStoryPage/>
      </>
    )
    }

    export default Home
