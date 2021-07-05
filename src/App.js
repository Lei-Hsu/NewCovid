import React from 'react';
import { useState } from 'react';
import Home from './Pages/Home/index'
import Navbar from './ProjectComponents/Navbar/Navbar'
import Footer from './ProjectComponents/Footer/Footer';
import NotFound404 from './Pages/404'
import { routers } from './Router/Router';
import { HashRouter, Switch, Route } from "react-router-dom";

export const Context = React.createContext();

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const Search_API_URL = 'https://covid-193.p.rapidapi.com'
  const Board_API_URL = 'https://coronavirus-map.p.rapidapi.com'


  return (
    <Context.Provider value={{ menuOpen, setMenuOpen, Search_API_URL, Board_API_URL }}>
      <div
        className={`w-screen h-screen font-sans font-bold relative bg-gray-100`}
      >
        <HashRouter>
          <Navbar
          />
          <Switch>
            <Route exact path='/' component={Home} />
            {
              routers.map((route, index) => {
                return (
                  <Route key={index} path={route.path} component={route.component} />
                )
              })
            }
            <Route path='*' component={NotFound404} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
