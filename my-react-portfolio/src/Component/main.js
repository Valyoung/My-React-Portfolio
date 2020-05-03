import React from 'react';
import { Switch } from 'react-mdl';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact'


const Main = () => (
<Switch>
    <Route exact path= "/" component={LandingPage} />
    <Route path= "/aboutme" component={AboutMe} />
    <Route path= "/resume" component={Resume} />
    <Route path= "/projects" component={Projects} />
    <Route path= "/contact" component={Contact} />
</Switch>
)

export default Main;