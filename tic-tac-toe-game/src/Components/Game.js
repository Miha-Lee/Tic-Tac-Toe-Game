import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner } from "./CalWinner";
import { findBestSquare } from "./MinMax";
import { isBoardFilled } from "./IsFilled";
import Reset from "./Reset";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };

    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  makeMove(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return Promise.resolve();
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const nextState = {
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    };

    return new Promise((resolve, reject) => {
      this.setState(nextState, resolve);
    });
  }

  async handleClick(i) {
    await this.makeMove(i);

    const squares = this.state.history[this.state.stepNumber].squares.slice();
    const bestSquare = findBestSquare(squares, this.state.xIsNext ? "X" : "O");
    if (bestSquare !== -1) {
      await this.makeMove(bestSquare);
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else if (isBoardFilled(current.squares)) {
      status = "It's a Tie!";
    } else {
      status = "Game start!";
    }

    return (
      <Board squares={current.squares} onClick={(i) => this.handleClick(i)}>
        <div className="status-bar">{status}</div>
        <div className="btn-wrapper">
          <Reset resetClick={this.resetClick} />
        </div>
      </Board>
    );
  }
}

export default Game;
