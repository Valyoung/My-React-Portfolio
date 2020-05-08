import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo from '../Logo update.png';


class  Home extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src={Logo}
                        className='avatar-img'/>
                        <div className='banner-text' >
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>HTML/ CSS | Bootstrap/ Bulma | JavaScript | React/ React Native | NodeJS | Express | MySQL | MongoDB</p>

                        </div>
                    </Cell>

                </Grid>
            </div>
         );
    }
}
 
export default Home;