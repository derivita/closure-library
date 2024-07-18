import { PortNetwork } from '../../messaging/portnetwork.js';
import { MockMessageChannel } from './mockmessagechannel.js';
import type { MockControl } from '../mockcontrol.js';
/**
 * The fake PortNetwork.
 */
export declare class MockPortNetwork implements PortNetwork {
    /**
     * The fake PortNetwork.
     * @param mockControl The mock control for creating the mock message channels.
     */
    constructor(mockControl: MockControl);
    private noStructuralTyping_closure_goog_testing_messaging_mockportnetwork_MockPortNetwork;
    /**
     * Get the mock port with the given name.
     * @param name The name of the port to get.
     * @return The mock port.
     */
    dial(name: string): MockMessageChannel;
}
