export class HighScoreComponent extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._build();
  }
  _build() {
    this._buildText();
    this._buildHighScore();
  }
  _buildText() {
    const text = this.scene.add.text(0, 15, "HIGH SCORE:", {
      fontFamily: "Arial Black",
      fontSize: 15,
      color: "#0F0DA3"
    });

    this.add(text);
  }
  _buildHighScore() {
    this._highScore = this.scene.add.text(120, 15, "0", {
      fontFamily: "Arial Black",
      fontSize: 15,
      color: "#0F0DA3"
    });

    this.add(this._highScore);
  }
}
