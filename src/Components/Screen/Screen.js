import "./Screen.css";

import React from "react";

export default class Screen extends React.Component {




    render() {
        const {display, currentDisplay} = this.props;

        return (
            <article  className="screen">
                <div id="display" className="top-screen">{display.length ? display : '0'}</div>
                <div className="bot-screen">{currentDisplay}</div>
            </article>
        )
    }
}