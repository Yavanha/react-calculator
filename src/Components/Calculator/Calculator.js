import "Calculator.css";
import React from "react";


export default class Calculator extends React.Component {


    constructor(props) {
        this.state = {
            touches: ["AC", "/", "X", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."]
        }
    }

    render() {
        return (
            <div className="calculator">

            </div>
        )
    }
}