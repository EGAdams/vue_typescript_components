import IMonitorLedData from "../abstract/IMonitorLedData";

/*
 * class DataObjectStatus
 */
class DataObjectStatus implements IMonitorLedData {
    constructor() {
        console.log( "constructing DataObjectStatus object..." );
    }

    ledText: string = "checking data object status...";
    
    classObject: any = {
        "background-color": "yellow"
    }
}

export default DataObjectStatus;
