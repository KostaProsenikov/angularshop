import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase, 
    private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('categories');
  }

  getCategories() {
    return this.itemsCollection.snapshotChanges(['added'])
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
  }
}
