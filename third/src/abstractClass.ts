abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getPortraitMode(): void;

    getPhotoTime(): number {
        return 8;
    }
}

class HrydamCamera extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getPortraitMode(): void {
        console.log("Portrait Mode");
    }
}

const hrydam = new HrydamCamera(
    "Portrait",
    "Natural",
    3
);

hrydam.getPhotoTime();