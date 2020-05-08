import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/homepage'
import Gallery from '../components/gallery'
import BlocksInsert from '../pages/BlocksInsert'


const Links = () => (
  <BrowserRouter>
    <div>
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallery} path="/gallery" />
          <Route component={BlocksInsert} path="/blocks/create" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default Links