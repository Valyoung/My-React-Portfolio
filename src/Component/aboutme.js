import React, { Component } from 'react';
import Mypic from '../mypic.jpg';


class  About  extends Component {
    render() { 
        return ( 
                <div style={{ margin: 'auto'}}>
<img className="val" 
     src={Mypic}
     alt="Me"/>
                        
<br/>
                       <p>Hello there! My name is Valeshka Young Sang. <br/>
                       I am a Web Developer with a purpose. I am from Brooklyn New York and now living in Kansas City. 
                       I love to solve complicated problems and have a mind for code. I am able to build, maintain and <br/> update websites with a unique technique.

I am interested in making a new way to communicate for children and adults that are gifted with autism. Come join me!</p> 

            </div>
         );
    }
}
 
export default About;