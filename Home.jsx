import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,Form } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Controller of Examinations</h2>
          <p>Farook College (Autonomous)</p>
          {/* <Link to="/about">
            <Button bsStyle="primary">Student Login</Button>
          </Link> */}
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={10} sm={8} className="person-wrapper">
            <Image src="assets/download.jpg" rounded className="profile-pic"/>
            <h3>Farook college main block</h3>
            <p>Farook College, today,is the biggest residential postgraduate institution in Kerala offering 20 undergraduate, 15 postgraduate and Eight Ph.D. programmes.</p>
          </Col>
          {/* <Col xs={20} sm={5} className="person-wrapper">
            <Image src="assets/fc..jpg"  className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col> */}
        <div className="form_main">
         <form className="wrapper">
           <h2>Student Login</h2>
           <label className="label1"><h4>Register number:</h4></label>
           <input type="text"
                  placeholder="Register No:"
            /><br />  <br /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <label className="label1"><h4>Password:</h4></label> 
           <input type="password"
                  placeholder="Password"
                  /> <br /> <br />
                  <Link to="/components/pages/Student">
            <Button  bsStyle="primary" className="button1" type="submit">Submit</Button> 
            </Link>    
                  </form>
          </div>
          
        </Row>
      </Grid>
    )
  }
}
