import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import AdminConsole from './components/main/AdminConsole'
import './App.css'
import TopBar from './components/layout/TopBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            {/* {
              user &&
              <TopBar />
            } */}
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dashboard" component={AdminConsole} />
            {/* <Route exact path="/feed" component={AdminConsole} /> */}
            <Route exact path="/" render={ () => <Redirect to="/dashboard" /> } />
          </main>
        </div>
      </Router>
    )
  }
}

// const mapStateToProps = state => ({
//   user: state.user
// })
export default App
// export default connect(mapStateToProps)(App)
