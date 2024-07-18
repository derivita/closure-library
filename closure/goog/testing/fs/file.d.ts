import { Blob } from './blob.js';
/**
 * A mock file object.
 */
export declare class File extends Blob {
    /**
     * A mock file object.
     * @param name The name of the file.
     * @param opt_lastModified The last modified date for this file. May be null if file modification dates are not supported.
     * @param opt_data The string data encapsulated by the blob.
     * @param opt_type The mime type of the blob.
     */
    constructor(name: string, opt_lastModified?: Date | null, opt_data?: string, opt_type?: string);
    private noStructuralTyping_closure_goog_testing_fs_file_File;
    name: string;
    lastModifiedDate: Date | null;
}
