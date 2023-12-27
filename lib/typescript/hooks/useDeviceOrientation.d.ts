declare type Orientation = 'landscape' | 'portrait';
export declare const useDeviceOrientation: () => {
    deviceOrientation: Orientation;
    windowHeight: number;
    windowWidth: number;
    menuWidth: number;
};
export default useDeviceOrientation;
