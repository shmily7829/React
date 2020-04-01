import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Title extends Component {
  static contextTypes = {
    title: PropTypes.string
  }
  render() {
    console.log(this.props);
    console.log(this.context);
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

class Demo extends Component {
  static contextTypes = {
    title: PropTypes.string
  }
  render() {
    return (
      // <div>{this.props.title}</div>
      //title={this.props.title}
      <Title></Title>
    )
  }
}

class App extends Component {
  static childContextTypes = {
    title: PropTypes.string
  }
  getChildContext() {
    return {
      title: "大標題"
    }
  }
  render() {
    return (
      <div>
        <Demo title="大標題"></Demo>
      </div>
    );

  }
}


export default App;
