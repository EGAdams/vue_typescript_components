/*
 * class ServerLedData
 */
import IMonitorLedData from "../abstract/IMonitorLedData";

class ServerLedData implements IMonitorLedData {
    constructor() { console.log( "constructing ServerLedData..." )}
    ledText = "checking server status...";
    classObject: any = {
        "background-color": "yellow"
    }
}

export default ServerLedData;
