import "./App.css";
import { Route , Switch } from 'react-router-dom';
import Signup from "./component/Signup";
import Login from "./component/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (

   <div className="App">
    <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Redirect from="/" to ="/signup" />
    </Switch>
   </div>
  );
}

export default App;
