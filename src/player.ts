import { Scene, Vector3, type Mesh } from "@babylonjs/core"
import { addMotionListeners } from "./utils/controls";
import { initSphere } from "./utils/setup";

export class Player {
    public static readonly SPEED = 2.5;
    mesh: Mesh
    controls: Record<string, number>
    grounded: boolean = false;


    constructor(scene: Scene) {
        // this.mesh = initBox(scene);
        this.mesh = initSphere(scene);
        this.controls = addMotionListeners();
    }
    updateVelocity() {
        const impostor = this.mesh.physicsImpostor;
        if (!impostor) return;

        const velocity = impostor.getLinearVelocity() || Vector3.Zero();
        const direction = new Vector3(0, 0, 0);

        // if (this.controls.d) direction.x -= Player.SPEED;
        // if (this.controls.a) direction.x += Player.SPEED;
        // if (this.controls.w) direction.z -= Player.SPEED;
        // if (this.controls.s) direction.z += Player.SPEED;
        // if (this.controls[" "] && this.grounded) direction.y += Player.SPEED * 2;

        if (this.controls.roll) direction.x -= Player.SPEED * this.controls.roll;
        if (this.controls.pitch) direction.z -= Player.SPEED * this.controls.pitch;

        

        // Update velocity (or use applyImpulse/applyForce for more realistic effects)
        impostor.setLinearVelocity(new Vector3(
            direction.x !== 0 ? direction.x : direction.x + velocity.x,
            direction.y !== 0 ? direction.y : direction.y + velocity.y, // preserve Y velocity (like gravity)

            direction.z !== 0 ? direction.z : direction.z + velocity.z
        ));
    }
}