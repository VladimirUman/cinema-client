import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, ConfirmRegistration, ResetPassword, ConfirmNewPassword, UserLogin, UserRegistration, ChangePassword } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
                <Route path="/auth/login" exact component={UserLogin} />
                <Route path="/auth/registration" exact component={UserRegistration} />
                <Route path="/auth/reset-password" exact component={ResetPassword} />
                <Route path="/auth/confirm-new-password" exact component={ConfirmNewPassword} />
                <Route path="/auth/confirm-registration" exact component={ConfirmRegistration} />
                <Route path="/account/change-password" exact component={ChangePassword} />
            </Switch>
        </Router>
    )
}

export default App
