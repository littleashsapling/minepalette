import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { BlocksList, BlocksInsert, BlocksUpdate } from '../pages'
import Gallery from '../components/gallery'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <p>kittens-index</p>
            <Switch>
                <Route path="/blocks/list" exact component={BlocksList} />
                <Route path="/blocks/create" exact component={BlocksInsert} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/blocks/update/:id" exact component={BlocksUpdate} />
            </Switch>
        </Router>
    )
}
//this is part of working navbar
export default App
