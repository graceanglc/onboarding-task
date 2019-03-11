import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';

import routes from 'src/routes';

// tanya decorator kok ga jalan
//@withRouter
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
      // <Switch>
      //   {routes.map(route => (
      //     <Route key={route.path} {...route} />
      //   ))}
      // </Switch>
    );
  }
}

// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App