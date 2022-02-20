/*
 * class ServerLedData
 */
import IMonitorLedData from "../abstract/IMonitorLedData";

class ServerLedData implements IMonitorLedData {
    constructor() {}
    ledText: String = "checking command manager status...";
    classObject: any = {
        "background-color": "yellow"
    }
}

export default ServerLedData;
