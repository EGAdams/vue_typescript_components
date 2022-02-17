/*
 *  interface ObjectView
*/
interface IObjectView {
    value:              string;
    properties:         Array< IPropertyValuePair >;
    subObjects:         Array< IObjectView >;
    screen_html:        string;
    leaf:               Boolean;
    expanded:           Boolean;
    construction_name:  string; 
}
