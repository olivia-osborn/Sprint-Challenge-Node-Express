import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import ProjectContainer from "./components/ProjectContainer";

class App extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/api/projects")
      .then(response => {
        this.setState({projects: response.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
      {this.state.projects.map(project => 
        <ProjectContainer
        project={project}
        />  
      )}
      </div>
    );
  }
}

export default App;
