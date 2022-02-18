import './App.css'
// import logo from './assets/Vector.svg'
// import btn from './assets/button.svg'
// import hello from './assets/Hello.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ComponentC from './conponentc'
// // import { useContext } from 'react'

import React from 'react'
import Login from './login'
import Signup from './initial/signup'
import Index from './initial/index'
import Welcome from './initial/welcom'
import Home from './home'
import History from './childpages/history'
import Cart from './childpages/cart'
import Details from './childpages/details'
import Payment from './childpages/payment'
import Offers from './childpages/offers'
import Feedback from './childpages/feedback'
import Pro from './childpages/pro'
import Packages from './childpages/packages'

export const userContext = React.createContext()
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/initial/signup'>
            <Signup />
          </Route>
          <Route path='/initial/index'>
            <Index />
          </Route>
          <Route path='/initial/welcom'>
            <Welcome />
          </Route>
          <Route path='/childpages/history'>
            <History />
          </Route>
          <Route path='/childpages/cart'>
            <Cart />
          </Route>
          <Route path='/childpages/details'>
            <Details />
          </Route>
          <Route path='/childpages/offers'>
            <Offers />
          </Route>
          <Route path='/childpages/payment'>
            <Payment />
          </Route>
          <Route path='/childpages/feedback'>
            <Feedback />
          </Route>
          <Route path='/childpages/pro'>
            <Pro />
          </Route>
          <Route path='/childpages/packages'>
            <Packages />
          </Route>
          <Route path='*'></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
// <div>
//         <p id='headertext'>Hi</p>
//         <userContext.Provider value={'Md Suweb Reza'}>
//           <ComponentC />
//         </userContext.Provider>
//       </div>
