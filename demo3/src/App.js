import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Title extends Component {
  static propTypes = {
    titile: PropTypes.string
  }
  // static defaultProps = {
  //   title: "默認參數標題"
  // }
  render() {
    return (
      <div>{this.props.title}</div>

    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRanderTest: false
    }
  }
  render() {
    return (
      <div>
        <Title title={100}></Title>
      </div>
    );
  }
}

export default App;
