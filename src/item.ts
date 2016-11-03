export class Item {
    constructor(public id: number, public description: string) {
        console.log(`Item ${id} '${description}' created.`);
    }
}