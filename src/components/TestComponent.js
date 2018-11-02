import React, { lazy, Suspense } from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom';

const SubComponent1 = lazy(() => import('./SubComponent1'));
const SubComponent2 = lazy(() => import('./SubComponent2'));
const SubComponent3 = lazy(() => import('./SubComponent3'));

function LazyComponent(Component) {
  return props => (
    <Suspense fallback={<div>loading route...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

function TestComponent({ match }) {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to={`${match.url}/sub-1`}>Sub Component 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/sub-2`}>Sub Component 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/sub-3`}>Sub Component 3</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/sub-1`} component={LazyComponent(SubComponent1)} />
        <Route path={`${match.path}/sub-2`} component={LazyComponent(SubComponent2)} />
        <Route path={`${match.path}/sub-3`} component={LazyComponent(SubComponent3)} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(TestComponent)
