import { Animation } from './animation.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * This animation class is used to animate a CSS sprite (moving a background
 * image).  This moves through a series of images in a single image sprite. By
 * default, the animation loops when done.  Looping can be disabled by setting
 * `opt_disableLoop` and results in the animation stopping on the last
 * image in the image sprite.  You should set up the {@code background-image}
 * and size in a CSS rule for the relevant element.
 */
export declare class CssSpriteAnimation extends Animation {
    /**
     * This animation class is used to animate a CSS sprite (moving a background
     * image).  This moves through a series of images in a single image sprite. By
     * default, the animation loops when done.  Looping can be disabled by setting
     * `opt_disableLoop` and results in the animation stopping on the last
     * image in the image sprite.  You should set up the {@code background-image}
     * and size in a CSS rule for the relevant element.
     * @param element The HTML element to animate the background for.
     * @param size The size of one image in the image sprite.
     * @param box The box describing the layout of the sprites to use in the large image.  The sprites can be position horizontally or vertically and using a box here allows the implementation to know which way to go.
     * @param time The duration in milliseconds for one iteration of the animation.  For example, if the sprite contains 4 images and the duration is set to 400ms then each sprite will be displayed for 100ms.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.  This can be used to make certain frames be shown for a longer period of time.
     * @param opt_disableLoop Whether the animation should be halted after a single loop of the images in the sprite.
     */
    constructor(element: Element | null, size: Size | null, box: Box | null, time: number, opt_acc?: () => number, opt_disableLoop?: boolean);
    private noStructuralTyping_closure_goog_fx_cssspriteanimation_CssSpriteAnimation;
    onAnimate(): void;
    onFinish(): void;
    /**
     * Clears the background position style set directly on the element
     * by the animation. Allows to apply CSS styling for background position on the
     * same element when the sprite animation is not runniing.
     */
    clearSpritePosition(): void;
    disposeInternal(): void;
}
