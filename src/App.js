import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Router> 
          <Switch>

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/country/:countryAlpha2Code">
              <CountryDetail/>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="*">
                <NoMatch/>
            </Route>
            
          </Switch>
        </Router>
      </header>
    </div>
  );
}
export default App;
