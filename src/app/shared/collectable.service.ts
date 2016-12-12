import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables: Collectable[] = [
        {description:'Essentials of journalism', type: 'Book'},
        {description:'White paper on Angular 2', type: 'Paper'},
        {description:'Family photo at home', type: 'Photo'},
        {description:'Box with all tools', type: 'Garbage'}
    ];
    private collection: Collectable[] = [];

    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }

    addToCollection(item: Collectable) {
        if(this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);

    }

    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);

    }

}