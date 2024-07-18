import type { MessageChannel } from './messagechannel.js';
/**
 * Creates a bidirectional pipe between two message channels.
 * @param channel1 The first channel.
 * @param channel2 The second channel.
 */
export declare function pipe(channel1: MessageChannel | null, channel2: MessageChannel | null): void;
