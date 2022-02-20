import IMonitorLedData from "@/typescript_source/abstract/IMonitorLedData";

/*
 * class ServerLedData
 */
class ServerLedData implements IMonitorLedData {
    constructor() { console.log( "constructing ServerLedData..." ); } // hush error.
    ledText: string = "checking server status...";
    classObject: any = {
        "background-color": "yellow"
    }
}

export default ServerLedData;
