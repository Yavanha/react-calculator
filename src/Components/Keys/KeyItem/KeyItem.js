import "./KeyItem.css";

import React from "react";

export default class KeyItem extends React.Component {

    render() {
        const {text, symbol} = this.props.keyItem;
        return (
            <article id={text} className="key-item">
            </article>
        )
    }
}