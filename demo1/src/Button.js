import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super()
    }
    render() {
        console.log("button組件更新")
        return (
            <button type="button">
                {/* 這是一個來自Button.js的Button組件 */}
                {this.props.name}
            </button>
        )
    }
}

//函數的組件
const Nav = function (props) {
    return (
        <div style={{ color: "white", backgroundColor: "black" }}>
            {props.title}
            {props.children}
        </div>
    )
}
export { Nav }

