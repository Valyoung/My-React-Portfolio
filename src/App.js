import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Component/main';
import {Link} from 'react-router-dom'


function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout>
      
        <Header transparent title="Valeshka Young Sang" style={{color: 'white'}}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Valeshka's Corner">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
