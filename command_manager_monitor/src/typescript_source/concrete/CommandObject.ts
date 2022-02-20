/*
 * class CommandObject implements ICommandObject
 */

class CommandObject implements ICommandObject {
    executable:             string;
    args:                   string;
    description:            string;
    targetMachine:          string;
    output:                 string;
    regex_map_filename:     string;
    outputProcessor:        string;
    emitter:                string;
    status:                 {};
    processedOutput:        {};
    properties:             ICommandObject[];
    

    constructor( commmandObjectArg :ICommandObject ) {
        this.executable         = commmandObjectArg.executable;
        this.args               = commmandObjectArg.args;
        this.description        = commmandObjectArg.description;
        this.targetMachine      = commmandObjectArg.targetMachine;
        this.output             = commmandObjectArg.output;
        this.status             = commmandObjectArg.status;
        this.regex_map_filename = commmandObjectArg.regex_map_filename;
        this.outputProcessor    = commmandObjectArg.outputProcessor;
        this.emitter            = "Socket";
        this.processedOutput    = {};   // no processed output yet.
        this.properties         = commmandObjectArg.properties;
    }
}

module.exports = CommandObject;
