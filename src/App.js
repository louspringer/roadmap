import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import { createInitiative, deleteInitiative } from "./graphql/mutations";
import { listInitiatives } from "./graphql/queries";

class App extends Component {
  state = {
    id: "",
    initiative: {
      name: ""
    },
    initiatives: []
  };

  async componentDidMount() {
    const result = await API.graphql(graphqlOperation(listInitiatives));
    console.log(result);
    this.setState({ initiatives: result.data.listInitiatives.items });
  }

  handleChangeInitiative = event => {
    this.setState({
      initiative: {
        name: event.target.value
      }
    });
  };

  handleAddInitiative = async event => {
    const { initiative, initiatives } = this.state;
    event.preventDefault();
    const input = {
      name: initiative.name
    };
    const result = await API.graphql(
      graphqlOperation(createInitiative, { input })
    );
    const newInitiative = result.data.createInitiative;
    const updatedInitiatives = [newInitiative, ...initiatives];
    const emptyInitiative = { name: "" };
    this.setState({
      initiatives: updatedInitiatives,
      initiative: emptyInitiative
    });
    console.log(this.initiatives);
    console.log(this.initiative);
  };

  handleSetNote = ({ note, id }) => {
    this.setState({note, id});
  }

  handleDeleteInitiative = async initiativeId => {
    const { initiatives } = this.state;
    const input = { id: initiativeId };
    const result = await API.graphql(graphqlOperation(deleteInitiative, {input}));
    const deletedInitiativeId = result.data.deleteInitiative.id;
    const updatedInitiatives = 
      initiatives.filter(initiative => initiative.id !== deletedInitiativeId);
    this.setState({initiatives: updatedInitiatives});
  };

  render() {
    const { initiatives, initiative } = this.state;
    console.log(initiatives);
    console.log(initiative);
    return (
      <div className="flex flex-column items-center justify-center pa3 roboto dark-gray bg-az-orange">
        <h1 className="f2-l ">Roadmap Editor</h1>
        {/* Note Form */}
        <form onSubmit={this.handleAddInitiative} className="mb3">
          <input
            type="text"
            className="pa2 f4"
            onChange={this.handleChangeInitiative}
            value={initiative.name}
            placeholder="Initiative name."
          />
          &nbsp;
          <button className="pa2 f4" type="submit">
            Add Initiative
          </button>
        </form>
        {/* initiatives list */}
        <div>
            {initiatives.map(item => (
            <div key={item.id} className="flex items-center">
              <li onClick={() => this.handleSetNote()(item)} className="list pa1 f3">{item.name}</li>
              <button
                className="bg-transparent bn f4"
                onClick={() => this.handleDeleteInitiative(item.id)}>
                <span>&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
