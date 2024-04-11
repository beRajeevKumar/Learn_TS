"use strict";
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        cameraMode = "Portrait";
        filter = "Clarendon";
        burstMode = false;
    }
    createStory() {
        console.log("Story created");
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, Shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.Shorts = Shorts;
        cameraMode = "Landscape";
        filter = "No filter";
        burstMode = true;
        Shorts = true;
    }
    createStory() {
        console.log("Story created");
    }
}
