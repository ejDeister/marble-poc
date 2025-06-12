import { Game } from "./game.ts";

window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.startLoop();
    console.log((window.DeviceMotionEvent as any).requestPermission);
});