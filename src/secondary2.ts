// import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import { Item } from './item';

export class Secondary2 {
    constructor() {
        this.items.push(new Item(1, "Item 1"));
        this.items.push(new Item(2, "Item 2"));
    }

    //router: Router;
    items: Item[];
    currentItem: Item;

    private nextId = 3;
    addItem() {
        var id = this.nextId++;
        this.items.push(new Item(id, `Item ${id}`));
    }
    // selectItem(item: Item) {
    //     this.currentItem = item;
    // }

    // configureRouter(config: RouterConfiguration, router: Router){
    //     config.map([
    //         { route: '',          moduleId: 'no-item',   title: 'Select an item'},
    //         { route: 'item/:id',  moduleId: 'item-detail', name:'item' }
    //     ]);
    //     this.router = router;
    // }
}
