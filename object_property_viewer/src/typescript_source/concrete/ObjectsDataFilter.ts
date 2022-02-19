/*
 * class ObjectsDataFilter
 * 
 * ObjectsUsedInObjectsVue objectDataToObjectViews( String StringJSON )
 * 
 */

import ThisObjectView from "./ThisObjectView";

class ObjectsDataFilter {    
    constructor(){ console.log( "constructing ObjectsDataFilter..." ); }
    update(): void { console.log( "updating ObjectsDataFilter..." ); }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    objectDataToObjectViews( rawObject: any | string ): IObjectView {
        if (  rawObject == null || Object.keys( rawObject ).length == 0 ) return new ThisObjectView();
        if ( typeof( rawObject ) == "string" ) {  // then make it a raw object
            const filtered = this.filterOutSpecialCharacters( rawObject );
            console.log( filtered );
            rawObject = JSON.parse( filtered );
        }
        
            // raw object is now a json object.  start processing object...
        const properties: Array< IPropertyValuePair >                       = [];
        const subObjects: Array< IObjectView | any >                        = [];
        const thisObjectView: IObjectView                                   = new ThisObjectView();

        for ( const object_property in rawObject ) {
            if ( object_property == "screen_html" ) { 
                thisObjectView.screen_html = rawObject[ object_property ];
                continue; }
            const propertyValuePair: IPropertyValuePair = { property: "", value: undefined };
            if ( typeof rawObject[ object_property ] == "string" ) {
                propertyValuePair.property   = object_property;
                propertyValuePair.value      = rawObject[ object_property ];
                properties.push( propertyValuePair );
            } else if ( typeof rawObject[ object_property ] == "boolean" ) {
                propertyValuePair.property = object_property;
                if ( rawObject[ object_property ] == true ) {
                    propertyValuePair.value = "true";
                } else {
                    propertyValuePair.value = "false";
                }
                properties.push( propertyValuePair );
            } else if ( typeof rawObject[ object_property ] == "number" ) {
                propertyValuePair.property = object_property;
                propertyValuePair.value = rawObject[ object_property ].toString();
                properties.push( propertyValuePair );
            }  else if ( typeof rawObject[ object_property ] == "object" ) {
                subObjects.push( this.objectDataToObjectViews( rawObject[ object_property ]));
            }
        }
        thisObjectView.properties = properties;
        thisObjectView.subObjects = subObjects;
        if ( subObjects.length > 0 ) {
            thisObjectView.leaf = false;
            thisObjectView.expanded = true;
        }
        if ( rawObject.constructor == null ) {
            thisObjectView.construction_name = "null_constructor";
        } else {
            thisObjectView.construction_name = rawObject.constructor.name;
        }
        return thisObjectView; }

    filterOutSpecialCharacters( jsonTextToFilter: string ): string {
        return jsonTextToFilter.replace(/\n/g, "\\n" );
    }
}    

export default ObjectsDataFilter;
