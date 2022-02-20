/*
 * interface ICommandObject
 */

interface ICommandObject {
    executable: string;
    args:                   string;
    description:            string;
    targetMachine:          string;
    output:                 string;
    regex_map_filename:     string;
    outputProcessor:        string;
    emitter:                string;
    properties:             Array< ICommandObject >;
    status:                 object;
    processedOutput:        object;
}
