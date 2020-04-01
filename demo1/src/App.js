import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { Nav } from './Button'


//class方式
// class Nav extends React.Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{ color: "white", background: "black" }}>Shuuuuu</div>
//     )
//   }
// }

//函數方式
// const Button = function() {
//   return(
//     <button type="button">來自Button函數僅有渲染功能</button>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      like: false
    }
  }

  handleClick() {
    this.setState({
      like: !this.state.like
    })
  }

  render() {
    console.log("state改變:render函數被觸發了")
    return (
      <div>
        <Nav />
        <Button></Button>
        <button type="button" style={this.state.like ? { color: "red" } : { color: "black" }}
          onClick={() => this.handleClick()}
        >
          {
            this.state.like ? "已讚" : "喜歡"
          }
        </button>
      </div>
    );
  }
}
export default App;
