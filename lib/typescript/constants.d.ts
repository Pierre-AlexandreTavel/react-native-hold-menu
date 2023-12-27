declare const HOLD_ITEM_TRANSFORM_DURATION = 150;
declare const HOLD_ITEM_SCALE_DOWN_VALUE = 0.95;
declare const HOLD_ITEM_SCALE_DOWN_DURATION = 210;
declare const SPRING_CONFIGURATION: {
    damping: number;
    mass: number;
    stiffness: number;
    restDisplacementThreshold: number;
    restSpeedThreshold: number;
};
declare const SPRING_CONFIGURATION_MENU: {
    damping: number;
    mass: number;
    stiffness: number;
    restDisplacementThreshold: number;
    restSpeedThreshold: number;
};
declare enum CONTEXT_MENU_STATE {
    UNDETERMINED = 0,
    ACTIVE = 1,
    END = 2
}
declare const MENU_TRANSFORM_ORIGIN_TOLERENCE = 10;
declare const IS_IOS: boolean;
declare const FONT_SCALE: number;
export { CONTEXT_MENU_STATE, HOLD_ITEM_TRANSFORM_DURATION, HOLD_ITEM_SCALE_DOWN_VALUE, HOLD_ITEM_SCALE_DOWN_DURATION, SPRING_CONFIGURATION, SPRING_CONFIGURATION_MENU, MENU_TRANSFORM_ORIGIN_TOLERENCE, IS_IOS, FONT_SCALE, };
