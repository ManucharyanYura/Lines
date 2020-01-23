import { EVENTS } from "../events";
import { HighScoreComponent } from "./high-scores-component";
import { NextBalls } from "./next-balls-component";
import { ScoresComponent } from "./scores-component";

export class UI extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._build();
    this.scene.events.on(
      EVENTS.COMBINATION_COLLECTED,
      this._onCombinationCollected,
      this
    );
  }

  _onCombinationCollected(score) {
    this._scores.updateScore(this._scores.score + score);
  }
  _build() {
    this._buildNexBallsComponent();
    this._buildScoresComponent();
    this._buildHighScoresComponent();
  }

  _buildNexBallsComponent() {
    this._nextBalls = new NextBalls(this.scene);
    this.add(this._nextBalls);
    this._nextBalls.setPosition(210, 0);
  }

  _buildScoresComponent() {
    this._scores = new ScoresComponent(this.scene);
    this.add(this._scores);
  }

  _buildHighScoresComponent() {
    this._highScore = new HighScoreComponent(this.scene);
    this.add(this._highScore);
  }
}
