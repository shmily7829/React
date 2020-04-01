import React, { Component } from 'react'

export default class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }

    handleInput(e) {
        console.log(e.target.value)//獲取target: html標籤
        console.log(e.nativeEvent)//獲取原生事件
        if (e.target.value.length > 10) {
            return
        }

        this.setState({
            value: e.target.value
        })
    }
    render() {
        console.log("Input組件更新")
        return (
            <input type="text" onInput={(e) => this.handleInput(e)} value={this.state.value} />
        )
    }
}