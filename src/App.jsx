import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BestBroast from './components/Broast';
import DownloadAndMenu from './components/DownloadAndMenu';
import AlbaikBroast from './components/AlbaikBroast';
import ExclusiveDeals from './components/ExclusiveDeals';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <BestBroast/>
      <DownloadAndMenu/>
      <AlbaikBroast/>
      <ExclusiveDeals/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
