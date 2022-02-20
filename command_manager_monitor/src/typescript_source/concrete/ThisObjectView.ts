/*
 * ThisObjectView
 */
import IObjectView from "../abstract/IObjectView";
import IPropertyValuePair from "../abstract/IPropertyValuePair";

class ThisObjectView implements IObjectView {
    value: string                       = "";
    properties: IPropertyValuePair[]    = [];
    subObjects: IObjectView[]           = [];
    screen_html: string                 = "";
    leaf: Boolean                       = false;
    expanded: Boolean                   = false;
    construction_name: string           = "";
}

export default ThisObjectView;