import React from "react";
import axios from "axios";
import ActionsList from "./ActionsList";

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actions: []
        }
    }

    componentDidMount() {
        axios
          .get(`http://localhost:3333/api/projects/${this.props.project.id}/actions`)
          .then(response => {
            this.setState({actions: response.data})
          })
          .catch(err => console.log(err))
      }

    render() {
        return (
            <div>
                <h2>{this.props.project.name}:</h2>
                <ActionsList
                actions={this.state.actions}
                />
            </div>
        )
    }
}

export default ProjectContainer;