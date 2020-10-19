import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from './components/Home/Search/Search';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage></SearchPage>
        </Route>
        <Route path="/" >
        <Home/> 
        </Route>

      </Switch>
         
      <Footer/>
      </Router>
        {/* Header*/}
        {/* Banner*/}
         {/* Cards*/}
         {/* Footer*/}
    </div>
  );
}

export default App;
