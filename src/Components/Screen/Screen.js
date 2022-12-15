import "./Screen.css";

import React from "react";

export default class Screen extends React.Component {




    render() {
        const {display, currentDisplay} = this.props;

        return (
            <article id="display" className="screen">
                <div className="top-screen">{display}</div>
                <div className="bot-screen">{currentDisplay}</div>
            </article>
        )
    }
}