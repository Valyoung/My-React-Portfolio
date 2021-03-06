import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class  Projects extends Component {
    constructor(props) { 
        super(props);
        this.state = { activeTab: 0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}}>
                    JavaScrit Game</CardTitle>
                    <CardText>
                        This was fun to create. Feel free to try it out. Human Vs. Computer. Good Luck!
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Valyoung/Rock-Paper-scissors" target="_blank"><Button colored>GitHub </Button></a> 
                        <a href="https://valyoung.github.io/Rock-Paper-scissors/" target="_blank"><Button colored>Demo </Button></a> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                    </Card>
                    </div>
            )
        } else if(this.state.activeTab ===1) {
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 
                    'url(data:image/png;base64,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) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        This was an awesome group project. I had alot of fun with the Front End UI part. This was deployed by Heroku.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/ksaudra2010/Project-2" target="_blank"><Button colored>GitHub </Button></a> 
                        <a href="https://immense-wildwood-98172.herokuapp.com/" target="_blank"><Button colored>Demo </Button></a>                     </CardActions>
                    <CardMenu style={{color: 'blue'}}>
                    </CardMenu>
                    </Card>
                    </div>
            )
        } else if(this.state.activeTab ===2) {
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 
                    'url(data:image/png;base64,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) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        This was another group project that focuses on a quiz using two API's. I also had fun with the Front End part of this as well.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Valyoung/Luke-and-Morty" target="_blank"><Button colored>GitHub </Button></a> 
                        <a href="https://valyoung.github.io/Luke-and-Morty/" target="_blank"><Button colored>Demo </Button></a>                     </CardActions>
                    <CardMenu style={{color: 'black'}}>
                    </CardMenu>
                    </Card>
                    </div>
            )

    } else if(this.state.activeTab ===3) {
        return(
            <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background:
                 'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover'}}>

                    </CardTitle>
                    <CardText>
                    This was an awesome interesting expereince. I worked with React MDL UI. Hope you can find a garage sale near you!
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/whit3hat/GarageSaleFinder" target="_blank"><Button colored>GitHub </Button></a> 
                        <a href="/" target="_blank"><Button colored>Demo </Button></a>                     </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                    </Card>
                    </div>
        )
    }
}


   
    render() {
        return(
            <div className="category-tabs" >
             <Tabs activeTab={this.state.activeTab}  onChange={(tabId) => this.setState({activeTab: tabId})}>
          <Tab>JavaScript</Tab>
          <Tab>MySQL</Tab>
          <Tab>API</Tab>
          <Tab>React</Tab>
          </Tabs>


              <Grid >
                  <Cell col={12}>
                      <div className="content">{this.toggleCategories()}</div>
                  </Cell>
              </Grid>

            </div>
         );
    }
}

 
export default Projects;