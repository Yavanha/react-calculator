import "./Keys.css"

import React from "react";

export default class Keys extends React.Component {



    



    renderKeyItem() {
        const {keys} = this.props;
        console.log(keys);
        this.keysElement = keys.map((key, index) => <div id={key.text} key={index}>{key.symbol}</div>); 
    }

    render() {
        this.renderKeyItem();
        return (
            <div className="keys">
                {this.keysElement}
            </div>
        )
    }
}