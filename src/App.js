import {BrowserRouter , Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home"
import Profile from './pages/Profile';
import NotFound from './pages/NotFound.jsx';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Links />
    <NavLinks />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  );
}
// Switch 는 위에 부분이 자세한거 밑으로 갈수록 포괄적인 부분으로 설정할것.
export default App;