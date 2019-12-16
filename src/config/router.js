import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter} from 'react-router-dom'

import Index from '../component/index'
import Login from '../component/Login'

const Routes = () => (
    <HashRouter>
        <div>
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route path="/index" component={Index} />
            <Route path="/login" component={Login} />
        </div>
    </HashRouter>
)

const RT = () => (
    <Routes />
)

export default RT
