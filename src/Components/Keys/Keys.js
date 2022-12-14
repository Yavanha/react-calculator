import "./Keys.css"

import React from "react";
import KeyItem from "./KeyItem/KeyItem";

export default class Keys extends React.Component {

    renderKeyItem() {
        const {keys} = this.props;
        this.keysElement = keys.map((key, index) => <KeyItem key={index} keyItem={key} />); 
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