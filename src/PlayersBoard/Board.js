import React from "react";
import { Square } from "./Square";
import { Calculate } from "../MovesCalculation/Calculate";

export class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (Calculate.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = Calculate.getNextTurnSymbol(this.state.xIsNext);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {[0, 1, 2].map(element => this.renderSquare(element))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map(element => this.renderSquare(element))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map(element => this.renderSquare(element))}
        </div>
      </div>
    );
  }
}
