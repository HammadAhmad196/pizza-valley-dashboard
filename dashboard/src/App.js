import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Registerscreen from './screens/RegisterScreen';
import Loginscreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>

      <Route path="/" component={AdminScreen} />
       <Route path="/register" exact component={Registerscreen} />
       <Route path="/login" exact component={Loginscreen} />
  
      </BrowserRouter>
    </div>
  );
}
 
export default App;
