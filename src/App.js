import Home from './Pages/Home/index'
import Navbar from './ProjectComponents/Navbar/Navbar'
import Footer from './ProjectComponents/Footer/Footer';
import NotFound404 from './Pages/404'
import { routers } from './Router/Router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={`w-screen h-screen font-sans font-bold relative`}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {
            routers.map(route => {
              return (
                <Route path={route.path} component={route.component} />
              )
            })
          }
          <Route path='*' component={NotFound404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
