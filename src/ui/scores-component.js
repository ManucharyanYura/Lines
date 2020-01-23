export class ScoresComponent extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._build();
  }
  get score() {
    return +this._score.text;
  }
  updateScore(score) {
    this._score.text = score;
  }

  _build() {
    this._buildTitleText();
    this._buildScoreText();
  }

  _buildTitleText() {
    const text = this.scene.add.text(0, 0, "SCORE:", {
      fontFamily: "Arial Black",
      fontSize: 15,
      color: "#0F0DA3"
    });

    this.add(text);
  }

  _buildScoreText() {
    this._score = this.scene.add.text(70, 0, "0", {
      fontFamily: "Arial Black",
      fontSize: 15,
      color: "#0F0DA3"
    });

    this.add(this._score);
  }
}
