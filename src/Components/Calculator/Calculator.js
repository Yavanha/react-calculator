import "Calculator.css";
import React from "react";


export default class Calculator extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            buttons: [
             {symbol: "AC", text: "clear"},
             {symbol: "/", text: "divide"},
             {symbol: "x", text: "multiply"},
             {symbol: "7", text: "seven"},
             {symbol: "8", text: "eight"},
             {symbol: "9", text: "nine"},
             {symbol: "-", text: "subtract"},
             {symbol: "4", text: "four"},
             {symbol: "5", text: "five"},
             {symbol: "6", text: "six"},
             {symbol: "+", text: "add"},
             {symbol: "1", text: "one"},
             {symbol: "2", text: "two"},
             {symbol: "3", text: "three"},
             {symbol: "=", text: "equals"},
             {symbol: "0", text: "zero"},
             {symbol: ".", text: "decimal"},
            ]
        }
    }

    render() {
        return (
            <div className="calculator">

            </div>
        )
    }
}