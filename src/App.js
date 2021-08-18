import {Switch,Route} from 'react-router-dom';
import Login from './components/LogIn';
import Logout from './components/Logout';
import Private from './components/Private';


function App() {
  return (
   <Switch>
     <Route exact path='/' component={Login}/>
     <Route exact path='/private' component={Private}/>
     <Route exact path='/logout' component={Logout}/>
   </Switch>
  );
}

export default App;
