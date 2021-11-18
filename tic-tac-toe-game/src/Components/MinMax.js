import { calculateWinner } from "./CalWinner";
import { isBoardFilled } from "./IsFilled";

export const findBestSquare = (squares, player) => {
  const opponent = player === "X" ? "O" : "X";

  const minimax = (squares, isMax) => {
    const winner = calculateWinner(squares);

    if (winner === player) return { square: -1, score: 1 };

    if (winner === opponent) return { square: -1, score: -1 };

    if (isBoardFilled(squares)) return { square: -1, score: 0 };

    const best = { square: -1, score: isMax ? -1000 : 1000 };

    for (let i = 0; i < squares.length; i++) {
      if (squares[i]) {
        continue;
      }

      squares[i] = isMax ? player : opponent;

      const score = minimax(squares, !isMax).score;

      squares[i] = null;

      if (isMax) {
        if (score > best.score) {
          best.score = score;
          best.square = i;
        }
      } else {
        if (score < best.score) {
          best.score = score;
          best.square = i;
        }
      }
    }

    return best;
  };

  return minimax(squares, true).square;
};
