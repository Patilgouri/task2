import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(firstname, lastname) {
    this.setState(prevState => ({
      people: [...prevState.people, { firstname, lastname }]
    }));
  }

  

  deletePerson(lastname) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.lastname !== lastname)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <Table>
          <Thead>
            <Tr>
              <Th>Sr.</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.people.map((person, index) => {
              return (
                <Tr key={person.lastname}>
                  <Th>{index + 1}</Th>
                  <Td>{person.firstname}</Td>
                  <Td>{person.lastname}</Td>
                  <Td>
                    <button onClick={this.deletePerson(person.lastname)} type="button" className="btn btn-primary">
                      Delete
                    </button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
