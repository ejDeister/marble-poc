export const addControlListeners = (): Record<string, boolean> => {
    const controls: Record<string, boolean> = {
        d: false,
        a: false,
        w: false,
        s: false,
        " ": false,
    };
    window.addEventListener("keydown", (e) => {
        if (e.key in controls) {
            controls[e.key] = true;
        }
    });
    window.addEventListener("keyup", (e) => {
        if (e.key in controls) {
            controls[e.key] = false;
        }
    });

    return controls;
}

export const addMotionListeners = (): Record<string, number> => {
    const controls: Record<string, number> = {
        pitch: 0,
        roll: 0,
        yaw: 0,
        lateral: 0,
        longitudinal: 0,
        vertical: 0,
    };

    const accelLabel = document.createElement("p");
    const gyroLabel = document.createElement("p");
    document.body.appendChild(accelLabel);
    document.body.appendChild(gyroLabel);


    // window.addEventListener("devicemotion", (event) => {
    //     const accel = event.accelerationIncludingGravity;
    //     if (accel) {
    //         if (accel.x !== null && accel.x !== undefined) controls.lateral = accel.x;
    //         if (accel.y !== null && accel.y !== undefined) controls.longitudinal = accel.y;
    //         if (accel.z !== null && accel.y !== undefined) controls.vertical = accel.z;
    //     }
    //     accelLabel.textContent = `Lat: ${controls.lateral}, Long: ${controls.longitudinal}, Vert: ${controls.vertical}`;    
    // });
    // window.addEventListener("deviceorientation", (event) => {
    //     controls.pitch = event.beta ? event.beta / 180 : 0;
    //     controls.roll = event.gamma ? event.gamma / 90 : 0;
    //     controls.yaw = event.alpha ? event.alpha : 0;
    //     gyroLabel.textContent = `Roll: ${controls.roll}, Pitch: ${controls.pitch}, Yaw: ${controls.yaw}`;
    // }); 

    return controls;
}