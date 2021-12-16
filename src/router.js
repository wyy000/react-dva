import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
// import Login from './pages/Login/Login'

// import dynamicRoutes from './dynamicRoutes'
import dynamic from 'dva/dynamic'

function RouterConfig({ app, history }) {
  // @ts-ignore
  // const Login = dynamic({
  //   app,
  //   models: () => [
  //     import('./models/user'),
  //   ],
  //   component: () => import('./pages/Login/Login'),
  // })

  // @ts-ignore
  const Exeal = dynamic({
    app,
    models: () => [
      import('./models/excel'),
    ],
    component: () => import('./pages/Exeal/index'),
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/*<Route path="/login" component={Login} />*/}
        <Route path="/exeal" component={Exeal} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
