import { ArcRotateCamera, Camera, CannonJSPlugin, Color3, GroundMesh, Mesh, MeshBuilder, PhysicsImpostor, StandardMaterial, Vector3, type Scene } from "@babylonjs/core";

export const initCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement("canvas");
    
    Object.assign(canvas.style, {
        width: "100%",
        height: "80%",
        touchAction: "none"
    }, { passive: false });

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    document.body.appendChild(canvas);
    return canvas;
};

export const initScene = (scene: Scene, cannon: CannonJSPlugin) => {
    const gravity = new Vector3(0, -9.81, 0);
    scene.enablePhysics(gravity, cannon);
};

export const initCamera = (scene: Scene, canvas: HTMLCanvasElement): Camera => {
    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    return camera;
};

export const initGround = (scene: Scene): GroundMesh => {
    const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
    ground.position.y = 0;
    ground.physicsImpostor = new PhysicsImpostor(
        ground,
        PhysicsImpostor.BoxImpostor,
        { mass: 0, restitution: 0.3 }, // static: mass = 0
        scene
    );
    return ground;
};

export const initBox = (scene: Scene): Mesh => {
    const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
    box.position.y = 2.5;
    box.physicsImpostor = new PhysicsImpostor(
        box,
        PhysicsImpostor.BoxImpostor,
        { mass: 3, restitution: 0.3 },
        scene
    );
    return box;
};

export const initSphere = (scene: Scene): Mesh => {
    const sphere = MeshBuilder.CreateSphere("sphere", {
        diameter: 2,
        segments: 32
    }, scene);
    sphere.position.y = 2.5;
    sphere.physicsImpostor = new PhysicsImpostor(
        sphere,
        PhysicsImpostor.SphereImpostor,
        { mass: 3, restitution: 0.3 },
        scene
    );
    const mat = new StandardMaterial("sphereMat", scene);
    mat.diffuseColor = new Color3(1, 0, 0);
    sphere.material = mat;
    return sphere; 
}