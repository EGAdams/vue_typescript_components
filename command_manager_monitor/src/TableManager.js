/*
 * class TableManager
 */

class TableManager {
    
    constructor() {
        this.dataSource = DataSourceFactory.getInstance();
    }

    createObjectRow( object_id  ) {
        var nextFunction = "checkResults";
        jQuery( document ).off().one( nextFunction, this[ nextFunction ] );
        var args = {
            query: "insert into monitored_objects( object_view_id, object_data ) values ( '" + object_id + "', '' )",
            trigger: nextFunction,  
            thisObject: this
        }
        console.log( "running query: " + args.query );
        this.dataSource.runQuery( args );
    }

    checkResults( event, results ) {
        console.log( "checking results of table manager inserting new object row... " );
        if ( results.data.error ) {
            if ( results.data.error.includes( "Duplicate entry" )) {
                console.log( "*** WARNING: duplicate entry in monitored objects table. ***" );
            } else {
                console.error( "*** ERROR: while running query: " + results.query + " ***" );
            }
        }
    }
}
