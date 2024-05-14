
declare interface MenuItem {

}

declare interface RouteState {
    menus: any[]
    title: string
    hasAside: boolean
}

declare interface ValidateErrorEntity<Values = any> {
    values: Values;
    errorFields: {
        name: any;
        errors: string[];
    }[];
    outOfDate: boolean;
}