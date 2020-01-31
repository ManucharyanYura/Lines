import { Ball } from "../board/ball";
import { Cell } from "../board/cell";
import { EVENTS } from "../events";

export class NextBalls extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._miniBoard = [];
    this._build();
  }
  updateBalls() {
    this._clearBoard();
    for (let i = 0; i < 3; i++) {
      const ball = this._generateRandomBall();
      this._miniBoard[i].addBall(ball);
    }
    const ballsTypes = this._miniBoard.map(cell => cell.ball.type);
    this.scene.events.emit(EVENTS.BALLS_READY, ballsTypes);
  }

  _build() {
    this._buildMiniBoard();
    this.updateBalls();
  }
  _buildMiniBoard() {
    for (let i = 0; i < 3; i++) {
      const cell = new Cell(this.scene, 0, i);
      this.add(cell);
      this._miniBoard.push(cell);
      const { width } = cell;
      cell.setPosition(i * width + width / 2, 15);
    }
  }
  _clearBoard() {
    this._miniBoard.forEach(cell => {
      cell.removeBall();
    });
  }

  _generateRandomBall() {
    const type = Math.floor(Math.random() * 4 + 1);
    const ball = new Ball(this.scene, type);

    return ball;
  }
}
