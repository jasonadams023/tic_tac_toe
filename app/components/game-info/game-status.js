export default function GameStatus (winner, tie, nextPlayer) {
    return (
        <div id="status">
            if (winner) {
              "Winner is: " + { winner }
            } else if (tie) {
              "Cat's Game"
            }else {
              "Next player: " + { nextPlayer }
            }
        </div>
    );
}