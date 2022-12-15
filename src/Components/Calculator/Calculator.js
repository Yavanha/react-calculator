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
                '+' : {
                    priority : 0,
                    cmd : (a, b) => a + b,
                },
                '/' : {
                    priority : 3,
                    cmd : (a, b) => a / b,
                },
                'x' : {
                    priority : 4,
                    cmd: (a, b) => a * b,
                },
                '-' :{
                    priority : 1,
                    cmd:  (a, b) => a - b
                },
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
            let displayStr = ''
            if (id === "clear") {
                return {
                    display: '',
                    lastDisplay: '',
                    lastKeyPressed: '',
                }
            } else if(id === "equals" && !isNaN(prevState.lastKeyPressed)) {
                const opeArr = prevState.display.split(' ').filter(a => a.length);
                const copyOpeArr = [...opeArr]
                const opes  = copyOpeArr.filter(ope => isNaN(ope))
                opes.sort((a, b) =>  prevState.operations[b].priority -prevState.operations[a].priority )
                opes.forEach(ope => {
                    const index = opeArr.indexOf(ope);
                    if( index !== -1) {
                        let next = 0
                        let results = undefined;
                        if(opeArr.at(index + 1) === "-" ) {
                            opeArr.splice(index + 1, 1);
                            if(opeArr.at(index + 1) === "+") {
                                opeArr.splice(index + 1, 1);
                                next = parseFloat(opeArr.at(index + 1));
                                results =  prevState.operations['+'].cmd(parseFloat(opeArr.at(index - 1)), next)

                            } else {
                                next = parseFloat(opeArr.at(index + 1)) * -1;
                            }
                        } else if (opeArr.at(index + 1) === "+") {
                            opeArr.splice(index + 1, 1);
                            next = parseFloat(opeArr.at(index + 1));
                        }
                        else {
                            next = parseFloat(opeArr.at(index + 1));
                        }
                        if(!results)
                            results =  prevState.operations[ope].cmd(parseFloat(opeArr.at(index - 1)), next)
                        console.log(results)
                        opeArr.splice(index - 1, 3, `${results}`)
                    }
                })
                const [result] = opeArr; 
                return {
                    display: `${parseFloat(result)}`,
                    lastDisplay : `${parseFloat(result)}`,
                    lastKeyPressed : `${innerText}`,
                    result : parseFloat(result)
               }      
           
            } else if(
                ((isNaN(prevState.lastKeyPressed)) &&  (innerText === "-" || innerText === "+")) 
                || (!(prevState.lastDisplay.includes('.') && (innerText === '.'))) 
                && ((prevState.lastKeyPressed === "=" ) 
                || (!(isNaN(innerText) && (isNaN(prevState.lastKeyPressed) || prevState.lastKeyPressed.length === 0 )) ))) {

                if (isNaN(innerText) &&  innerText !== '.') {
                    displayStr = prevState.lastKeyPressed === "=" ? `${prevState.result} ${event.target.innerText} ` : `${prevState.display} ${event.target.innerText} `

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

        const displayArr = text.trim().replace(/^0+$/g, '0').split(' ').filter( a => a.length);
        console.log(displayArr)

        return {
            display: text.replace(/^0+$/g, '0'),
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