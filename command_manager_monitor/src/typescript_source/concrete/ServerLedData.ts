import IMonitorLedData from "@/typescript_source/abstract/IMonitorLedData";

/*
 * class ServerLedData
 */
class ServerLedData implements IMonitorLedData {
    constructor() { console.log( "constructing ServerLedData..." ); } // hush error.
    
    ledText     = "checking server status...";
    classObject = { "background-color": "yellow" };
}

export default ServerLedData;
