
export class ItemDetail {
    routeConfig;
    id: any;

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        this.id = params.id;
    }
}