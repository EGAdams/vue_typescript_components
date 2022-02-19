/*
 *  class MonitoredObject
 */

class MonitoredObject {

    constructor() {
        this.construction_name = this.constructor.name;
        this.screen_html = "";
    }

    logUpdate( message ) {
        var dateObject = new Date();
        var datetime = dateObject.timeNow();
        var newMessage = datetime + " " + message + "<br>";
        if ( !this.id && message ) {
            this.screen_html += newMessage;
            console.log( "*** ERROR: no construction id! ***  remembering message anyway..." );
            return;
        }
        console.log( message );
        this.screen_html += newMessage;
        var nextFunction = "checkMessageResults";
        jQuery( document ).off().one( nextFunction, this[ nextFunction ] );
        var args = {
            query: "update monitored_objects set object_data='" + JSON.stringify( this /*, this.replacer*/ ) + "' where object_view_id='" + this.id + "'",
            trigger: nextFunction,
            thisObject: this
        }
        console.log( "running query: " + args.query );
        this.dataSource.runQuery( args );
    }

    checkMessageResults( event, results ) {
        if ( results.data.length > 0 ) { console.log( results.data ); }
    }

    replacer( key, value ) { // Filter out objects from monitored_objects update
        if ( typeof value === 'object' && key.length != 0 ) { return {}; }
        return value;
    }

    log( message ) {
        console.log( message );
    }

    getMonitorId() { return this.id; }

    setMonitorId( newId ) {
        this.id = this.construction_name + "_" + newId;
        var tableManager = new TableManager();
        tableManager.createObjectRow( this.id );
    }

    testMe() {
        var errors = [];
        if ( errors.length == 0 ) {
            console.log( "Object passsed all tests." );
        } else {
            errors.forEach( error => {
                console.error( error );
            } );
        }
    }
}

class TestClass extends MonitoredObject {
    constructor( numeric_id ) {
        super( numeric_id );
    }
}

if ( typeof ( process ) != "undefined" ) {
    var arguments = process.argv.slice( 2 );
    if ( arguments.includes( "testMe" ) ) {
        var tester = new TestClass( 100 );
        tester.testMe();
    }
}
