import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class  Home extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src='/Logo update.png'
                        className='avatar-img'/>
                        <div className='banner-text' >
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap/ Bulma | JavaScript | React/ React Native | NodeJS | Express | MySQL | MongoDB</p>
                            <div className='socail-links' >
                           <a href='https://www.linkedin.com/in/valeshka-young-sang-251738185/' rel='noopener moreferrer' target='_blank'>
                               <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                           </a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
         );
    }
}
 
export default Home;