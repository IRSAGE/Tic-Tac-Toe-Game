import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();

let gameView = new GameView();

// console.log(game.board)
// console.log("First Turn is ", game.turn)
// game.nextTurn()
// console.log("Second Turn is ", game.turn);
// game.makeMove(3)
// console.log(game.board)
// game.nextTurn();
// game.makeMove(8);
// console.log(game.board);
// gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
    game.nextTurn()
}
