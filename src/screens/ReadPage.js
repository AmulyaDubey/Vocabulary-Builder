import React, { Component } from "react";

export default class ReadPage extends Component {
  state = {
    dictionary: {},
  };

  componentDidMount = () => {
    const data = require("../data/dictionary.json");
    this.setState({ dictionary: data.words });
  };
  render() {
    const { dictionary } = this.state;
    return (
      <div className="container p-5">
        <h2>Vocabulary Read Page</h2>
        <div className="card-columns">
          {Object.entries(dictionary).map((entry) => (
            <div className="card m-4" style={{ width: "18rem" }}>
              <div className="card-header">{entry[0]}</div>
              <ul className="list-group list-group-flush">
                {entry[1].map((word) => (
                  <li className="list-group-item">{word}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
