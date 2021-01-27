import React, { Component } from 'react';
import '../App.css';
import Workflow from '../images/Workflow.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>CONGRATULATIONS!!</h2>
        <p>Your application has been successfully deployed on AWS Elastic Beanstalk</p>
        <img src={Workflow} alt="CI/CD Infrastructure Workflow"></img><br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default Home;