import { CannonJSPlugin, HemisphericLight, Vector3, Camera, Engine, GroundMesh, Light, Scene } from "@babylonjs/core";
import { Player } from "./player";
import { initBox, initCamera, initCanvas, initGround, initScene } from "./utils/setup";
import * as CANNON from "cannon-es";

export class Game {
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    cannon: CannonJSPlugin;
    light: Light;
    camera: Camera;
    ground: GroundMesh;
    player: Player;

    constructor() {
        this.canvas = initCanvas();
        this.engine = new Engine(this.canvas, true);

        this.scene = new Scene(this.engine);
        this.cannon = new CannonJSPlugin(true, 10, CANNON);
        initScene(this.scene, this.cannon);

        this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        this.camera = initCamera(this.scene, this.canvas);
        this.ground = initGround(this.scene);

        this.player = new Player(this.scene);

    }

    updateState() {
        this.player.updateVelocity();
    }

    startLoop() {
        this.engine.runRenderLoop(() => {
            this.updateState();
            this.scene.render();
        })
    }
}