import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Home from '../views/Home';
import ForgotPassword from '../views/ForgotPassword';
import SucessSignup from '../views/SucessSignup';
import AddService from '../views/AddService';

function Routes() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/home" component={Home}/>
              <Route path="/forgotpassword" component={ForgotPassword}/>
              <Route path="/sucess-signup" component={SucessSignup}/>
              <Route path="/add-service" component={AddService}/>

            </Switch>  
        </BrowserRouter>
    )
}

export default Routes;