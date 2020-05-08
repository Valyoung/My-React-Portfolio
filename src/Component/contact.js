import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class  Contact extends Component {
    render() { 
        return ( 
            <div className='contact-body'>
              <Grid className='contact-grid'>
                  <Cell col={6}>
                      <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Lets Grab Coffee!</h4>
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7-sKiNVJ1sXlrxSFcWoKLV0chRiEKtBSV3__QOAuW5YOayyVH&usqp=CAU"
                        alt="coffee"
                        style={{height:"225px"}}/>
                      </Cell>
                  <Cell col={6}>
                      <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Contact Me</h4>
                      <hr/>
<div className="contact-list">
                      <List>
  <ListItem>
    <ListItemContent style={{fontSize:"50px"}}> <a href="https://github.com/Valyoung"> <img src="linkden.png"/></a> Linkden</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:"50px"}}> <a href="https://github.com/Valyoung"> <img src="github.png"/></a> GitHub</ListItemContent>
  </ListItem>
</List>
</div>
                  </Cell>

                  </Grid>  
            </div>
         );
    }
}
 
export default Contact;