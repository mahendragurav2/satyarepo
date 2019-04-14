import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  incrementCount() {
    // this.setState(state => {
    //   // Important: read `state` instead of `this.state` when updating.
    //   return { count: state.count + 1 };
    // });

    // this.setState({ count: this.state.count + 1 });
    console.log("hiiii");
  }

  pageLoad() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  handleClick() {
    // Increment the count when the button is clicked
    //Working code
    this.setState(
      {
        count: this.state.count + 1
      },
      function() {
        // setState is asynchronous! This function gets called
        // when it's finished.
        console.log("Job's done");
      }
    );
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">Button presses: {this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add One</button>
      </div>
    );
  }
}

export default App;
