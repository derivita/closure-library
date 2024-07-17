import type { WebChannelTransport } from './webchanneltransport.js';
/**
 * Create a new WebChannelTransport instance using the default implementation.
 * Throws an error message if no default transport available in the current
 * environment.
 * @return the newly created transport instance.
 */
export declare function createWebChannelTransport(): WebChannelTransport;
