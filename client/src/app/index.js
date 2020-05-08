import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from '../components/gallery'
import MainNavBar from '../components/NavBar'
import { BlocksList, BlocksInsert, BlocksUpdate } from '../pages'


import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
    <Router>
        <MainNavBar />
        <Switch>
            <Route exact path="/blocks/list" exact component={BlocksList} />
            <Route exact path="/blocks/create" exact component={BlocksInsert} />
            <Route exact path="/gallery" exact component={Gallery} />
            <Route exact path="/blocks/update/:id" exact component={BlocksUpdate} />
        </Switch>
    </Router>
)
//this is part of working navbar
export default App
