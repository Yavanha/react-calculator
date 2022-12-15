import "./Calculator.css";
import React from "react";
import Screen from "../Screen/Screen";
import Keys from "../Keys/Keys";



export default class Calculator extends React.Component {


    constructor(props) {
        super(props)
        this.handleKeyItemClick = this.handleKeyItemClick.bind(this);
        this.state = {
            display: '',
            lastDisplay: '',
            lastKeyPressed: '',
            result : 0,
            operations : {
                '+' : (a, b) => a + b,
                '/' : (a, b) => a / b,
                'x' : (a, b) => a * b,
                '-' : (a, b) => a - b,
            },
            keys: [
                { symbol: "AC", text: "clear", },
                { symbol: "/", text: "divide", },
                { symbol: "x", text: "multiply", },
                { symbol: "7", text: "seven", },
                { symbol: "8", text: "eight" },
                { symbol: "9", text: "nine" },
                { symbol: "-", text: "subtract" },
                { symbol: "4", text: "four" },
                { symbol: "5", text: "five" },
                { symbol: "6", text: "six" },
                { symbol: "+", text: "add" },
                { symbol: "1", text: "one" },
                { symbol: "2", text: "two" },
                { symbol: "3", text: "three" },
                { symbol: "=", text: "equals" },
                { symbol: "0", text: "zero" },
                { symbol: ".", text: "decimal" },
            ],
            
        }

    }


    handleKeyItemClick(event) {

        this.setState((prevState) => {
            const { id, innerText } = event.target;
            console.log("equals ", prevState.lastKeyPressed)
            let displayStr = ''
            if (id === "clear") {
                return {
                    display: '',
                    lastDisplay: '',
                    lastKeyPressed: '',
                }
            } else if(id === "equals" && !isNaN(prevState.lastKeyPressed)) {
                const opeArr = prevState.display.split(' ');
                console.log(opeArr)
                let total  = parseFloat(opeArr.shift());
                console.log({total})
                while(opeArr.length) {
                    const elt  = opeArr.shift();
                    total = prevState.operations[elt](total, parseFloat(opeArr.shift()))
                
                }
                return {
                    display: `${prevState.display}${innerText} ${total}`,
                    lastDisplay : `${total}`, 
                    lastKeyPressed : `${innerText}`,
                    result : total
                }
            } else if(prevState.lastKeyPressed === "=" 
                    || !(isNaN(innerText) && (isNaN(prevState.lastKeyPressed) || prevState.lastKeyPressed.length === 0))) {
                if (isNaN(innerText) &&  innerText !== '.') {
                    displayStr = prevState.lastKeyPressed === "=" ? `${prevState.result} ${event.target.innerText} `  : `${prevState.display} ${event.target.innerText} `

                } else {
                    displayStr = prevState.lastKeyPressed === "=" ? `${innerText}` : `${prevState.display}${innerText}`
                }
                return this.setDisplay(displayStr, innerText)
     
            } else {
                return prevState;
            }


        })

    }


    setDisplay(text, keyPressed) {

        const displayArr = text.trim().split(' ');
        console.log(displayArr)
        return {
            display: text,
            lastDisplay: `${displayArr.at(-1)}`,
            lastKeyPressed: `${keyPressed}`
        }
    }




    render() {

        return (
            <div className="calculator">
                <Screen display={this.state.display} currentDisplay={this.state.lastDisplay} />
                <Keys keys={this.state.keys} onClickKeyItems={this.handleKeyItemClick} />
            </div>
        )
    }
}