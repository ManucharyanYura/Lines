import { Cell } from "../board/cell";

export class NextBalls extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._miniBoard = [];
    this._build();
  }

  _build() {
    this._buildMiniBoard();
    this._showNextBalls();
  }
  _buildMiniBoard() {
    console.log("asd");

    for (let col = 0; col < 3; col++) {
      const cell = new Cell(this.scene, 1, col);
      this.add(cell);
      this._miniBoard.push(cell);
      const { width } = cell;
      cell.setPosition(col * width + width / 2, 15);
    }
  }
  _showNextBalls() {
    //
  }
}
