import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { BlocksList, BlocksInsert,BlocksUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/blocks/list" exact component={BlocksList} />
                <Route path="/blocks/create" exact component={BlocksInsert} />
                <Route path="/blocks/update/:id" exact component={BlocksUpdate}/>
            </Switch>
        </Router>
    )
}

export default App
