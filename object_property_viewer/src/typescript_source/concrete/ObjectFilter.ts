// import JsonObjectManager from "./JsonObjectManager";
// import ObjectsDataFilter from "./ObjectsDataFilter";

// /*
//  * ObjectFilter
//  */
// class ObjectFilter {
    
//     jsonObjectManager: JsonObjectManager = new JsonObjectManager();
//     objectsDataFilter: ObjectsDataFilter = new ObjectsDataFilter();

//     filterObjectData( commandObject, parentObjects ) {
//         if ( commandObject ) {
//             if ( commandObject.status ) {
//                 this.classObject = commandObject.status.statusBlock.led;
//             } else {

//                 console.log( "command object is defined.  calling object data to object views..." );
//                 if ( commandObject.object_data.length == 0 ) {
//                     console.log( "*** WARNING: command object passed to gotData handler with no data.  exiting handler... ***" );
//                     this.dataObjectEmptyWarning = "data object empty.  check MonitoredObject.js. make sure that it is sending data.";
//                     this.warningStyleObject = { "background-color": "yellow" };
//                     return;
//                 }

//                 let object_data: IObjectView = this.objectsDataFilter.objectDataToObjectViews( commandObject.object_data );
//                 console.log( "checking objects array before continuing..." );
//                 this.jsonObjectManager.insertIfNotInArray( object_data, parentObjects );
                
//                 //this.set( object_data, "screen_html", object_data.screen_html );
//                 //this.jsonObjectManager.tempRemoveJsonObjectFromArray( object_data, parentObjects, this ); // trigger change.

//                 for ( var object in parentObjects ) {
//                     if ( !object_data.properties[ 0 ].value ) {  // exit if object does not have a name.
//                         this.dataObjectEmptyWarning = "no constructor name in command object.";
//                         this.warningStyleObject = {
//                             "background-color": "red",
//                             color: "white"
//                         };
//                         return;
//                     }
//                     if ( typeof ( parentObjects[ object ] ) == "undefined" ) {
//                         console.log( "WARNING: " + object_data.properties[ 0 ].value +
//                             "not found in parentObjects. continuing..." );
//                         continue;    
//                     }
//                     if ( parentObjects[ object ].properties[ 0 ].value == object_data.properties[ 0 ].value ) { // names equal?
//                         // parentObjects[ object ] = object_data;  // found the object that we want to update.
//                         parentObjects.splice( object, 1, object_data );
//                         console.log( "found: " + parentObjects[ object ].properties[ 0 ].value + ".  done updating." );
//                         return;
//                     }
//                 };
//             }
//         }
//     }
// }

// export default ObjectFilter;
