export /**
 * Constants for pointer event names that fall back to corresponding touch event
 * names on unsupported platforms. These are intended to be drop-in replacements
 * for corresponding values in `EventType`.
 */ type PointerTouchFallbackEventType = string;
export declare const PointerTouchFallbackEventType: {
    POINTERDOWN: string;
    POINTERUP: string;
    POINTERCANCEL: string;
    POINTERMOVE: string;
};
