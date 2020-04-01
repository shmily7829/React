import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { Nav } from './Button'
import Input from './Input'

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
    // this.state = {
    //   like: false
    // }
    // this.handleClick.bind(this)
  }

  handleClick() {
    // this.setState({
    //   like: !this.state.like
    // })
    console.log("正在調用handleClick事件")
  }

  render() {
    //console.log("state改變:render函數被觸發了")
    console.log("App組件更新")
    return (
      <div>
        {/* <Nav />
        <Button></Button>
        <button type="button" style={this.state.like ? { color: "red" } : { color: "black" }}
          onClick={() => this.handleClick()}
        >
          {
            this.state.like ? "已讚" : "喜歡"
          }
        </button> */}

        {/* <p onClick = {function(){console.log(this)}}>
        點擊看this</p> */}
        {/* <p onClick = {this.handleClick}>
        點擊看this,使用bind</p> */}
        {/* <p onClick = {()=>this.handleClick()}>
        點擊看this,使用箭頭函數</p> */}
        {/* <Input></Input>
        <Button></Button>
        <p onClick={() => this.setState({})}>點擊更新app組件</p> */}
        <hr />
        <Nav title={"標題"}>
          <h3>這是一個傳遞的children</h3>
          <h3>這是一個傳遞的children 2 </h3>
          <Button name="點點看"></Button>
          <Button name="再點點點"></Button>
        </Nav>

      </div>
    );
  }
}
export default App;
