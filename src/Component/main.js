import React from 'react';
import { Switch } from 'react-mdl';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Home from './home';
import Projects from './projects';
import Contact from './contact'


const Main = () => (
<Switch>
    <Route exact path= "/" component={LandingPage} />
    <Route path= "/aboutme" component={AboutMe} />
    <Route path= "/home" component={Home} />
    <Route path= "/projects" component={Projects} />
    <Route path= "/contact" component={Contact} />
</Switch>
)

export default Main;