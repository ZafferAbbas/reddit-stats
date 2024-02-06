import React from 'react';
import './App.css';
import Header from './sections/Header';
import Searchbar from './components/Searchbar';
import SearchResult from './components/SearchResult';
import HeroText from './components/HeroText';
import Footer from './sections/Footer';
import DayTimeCalendar from './components/DayTimeCalendar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroText></HeroText>
      <Searchbar></Searchbar>
      <SearchResult></SearchResult>
      <DayTimeCalendar></DayTimeCalendar>
      <Footer></Footer>
    </div>
  );
}

export default App;
