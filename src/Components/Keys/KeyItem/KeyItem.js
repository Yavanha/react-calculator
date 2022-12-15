import "./KeyItem.css"

import React from "react";

export default class KeyItem extends React.Component {

    render() {
        const {text, symbol} = this.props.keyItem;
        const {onClickKeyItem} = this.props;
        return (
            
            <article id={text} className="key-item" onClick={onClickKeyItem}>
                {symbol}
            </article>
        )
    }
}