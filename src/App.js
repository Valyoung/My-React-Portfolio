import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Footer, FooterSection, } from 'react-mdl';
import Main from './Component/main';
import {Link} from 'react-router-dom'


function App() {
  return (
   <div>
       <div style={{height: '1000px', position: 'relative'}}>
    <Layout>
        <Header transparent title="Valeshka Young Sang" style={{color: 'white'}}>
            <Navigation>
            <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Valeshka's Corner">
            <Navigation>
            <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>   
        <Main/>
    </Layout>
 
    </div>
    <Footer size="mini" style={{backgroundcolor:'black'}}>
        <FooterSection type="center" logo="">
            {/* <FooterLinkList> */}
                <div className="wrapper" style={{color: 'aliceblue', fontSize:'20px', width:'1500px'}}>
                    Made with ❤ 2020
                </div>
            {/* </FooterLinkList> */}
        </FooterSection>
    </Footer>
    </div>

);
  
}

export default App;
