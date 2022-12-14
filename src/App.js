import "./App.css"

import React from "react"

import Calculator from "./Components/Calculator/Calculator"

export default class App extends React.Component { 

  render() {
      return (
        <main className="main-container">
          <Calculator />
        </main>
      )
  }

}