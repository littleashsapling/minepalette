import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../components/homepage'
import Gallery from '../components/gallery'
import BlocksInsert from '../pages/BlocksInsert'


const Links = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <div className="main-content">
        <p>kittens</p>
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallery} path="/gallery" />
          <Route component={BlocksInsert} path="/uploadBlock" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default Links