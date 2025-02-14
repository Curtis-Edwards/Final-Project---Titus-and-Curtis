/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButtonNormal = null
    this.startButtonHard = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "assets/game_backdrop.png")
    this.load.image("startButtonNormal", "assets/normal_start_button.png")
    this.load.image("startButtonHard", "assets/hard_start_button.png")
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1080 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButtonNormal = this.add.sprite(
      1080 / 2,
      540 / 2 + 100,
      "startButtonNormal"
    )
    this.startButtonNormal.on("pointerdown", () => this.clickButtonNoraml())

    this.startButtonHard = this.add.sprite(
      1080 / 2,
      1080 / 2 + 100,
      "startButtonHard"
    )
    this.startButtonHard.setInteractive({ useHandCursor: true })
}

export default MenuScene
