export /**
 * Constants for pointer event names that fall back to corresponding mouse event
 * names on unsupported platforms. These are intended to be drop-in replacements
 * for corresponding values in `EventType`.
 */ type PointerFallbackEventType = string;
export declare const PointerFallbackEventType: {
    POINTERDOWN: string;
    POINTERUP: string;
    POINTERCANCEL: string;
    POINTERMOVE: string;
    POINTEROVER: string;
    POINTEROUT: string;
    POINTERENTER: string;
    POINTERLEAVE: string;
};
