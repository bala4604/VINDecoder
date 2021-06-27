import React,{Component} from 'react';
import LoginHandler from './LoginHandler'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from '../Redux/Reducers/combine';
import RegisterHandler from './RegisterHandler';
import Homehandler from './Homehandler'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
const store=createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class App extends Component {
  render()
  {
   console.log("App rerender")
   return (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/register"> <RegisterHandler/></Route>
      <Route exact path="/Home"> <Homehandler/></Route>
      <Route exact path="/login"><LoginHandler/> </Route>
      <Route path="/"> <LoginHandler/></Route>
    </Switch>
    </BrowserRouter>
    </Provider>
  );
  }
  
}

export default App;
