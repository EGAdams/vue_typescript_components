import IMonitorLedData from "../abstract/IMonitorLedData";

/*
 * class ServerLedData
 */
class ServerLedData implements IMonitorLedData {
    constructor() { console.log( "constructing ServerLedData..." )}
    ledText = "checking server status...";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    classObject: any = {
        "background-color": "yellow"
    }
}

export default ServerLedData;
