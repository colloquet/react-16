import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { ThemeContext } from './ThemeContext';
import { CountContext } from './CountContext';
import ExampleSuspense from './views/ExampleSuspense';
import ExampleMemo from './views/ExampleMemo';
import ExamplePortal from './views/ExamplePortal';
import ExampleForwardRef from './views/ExampleForwardRef';
import ExampleFragment from './views/ExampleFragment';
import ExampleContext from './views/ExampleContext';
import ExampleErrorBoundary from './views/ExampleErrorBoundary';
import DeprecationView from './views/DeprecationView';
import './App.css';

class App extends React.Component {
  state = {
    theme: 'light',
    count: 0,
  };

  componentDidMount() {
    document.body.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate() {
    document.body.setAttribute('data-theme', this.state.theme);
  }

  toggleTheme = () => {
    this.setState(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' }));
  };

  increase = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <CountContext.Provider value={{ count: this.state.count, increase: this.increase }}>
        <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
          <Router>
            <div className="App">
              <div>
                <NavLink to="/suspense">Suspense</NavLink>
                {' | '}
                <NavLink to="/memo">React.memo</NavLink>
                {' | '}
                <NavLink to="/portal">Portals</NavLink>
                {' | '}
                <NavLink to="/fragment">Fragments</NavLink>
                {' | '}
                <NavLink to="/context">Context</NavLink>
                {' | '}
                <NavLink to="/error-boundary">Error Boundary</NavLink>
                {' | '}
                <NavLink to="/forward-ref">Forwarding Refs</NavLink>
                {' | '}
                <NavLink to="/deprecation">Deprecation</NavLink>
              </div>

              <Switch>
                <Route path="/suspense" component={ExampleSuspense} />
                <Route path="/memo" component={ExampleMemo} />
                <Route path="/portal" component={ExamplePortal} />
                <Route path="/fragment" component={ExampleFragment} />
                <Route path="/context" component={ExampleContext} />
                <Route path="/error-boundary" component={ExampleErrorBoundary} />
                <Route path="/forward-ref" component={ExampleForwardRef} />
                <Route path="/deprecation" component={DeprecationView} />
              </Switch>
            </div>
          </Router>
        </ThemeContext.Provider>
      </CountContext.Provider>
    );
  }
}

export default App;
