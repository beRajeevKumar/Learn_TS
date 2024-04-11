interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: boolean;
}
interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: boolean
  ) {
    cameraMode = "Portrait";
    filter = "Clarendon";
    burstMode = false;
  }
  createStory() {
    console.log("Story created");
  }
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: boolean,
    public Shorts: boolean
  ) {
    cameraMode = "Landscape";
    filter = "No filter";
    burstMode = true;
    Shorts = true;
  }
  createStory() {
    console.log("Story created");
  }
}
