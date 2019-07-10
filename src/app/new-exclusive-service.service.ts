import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NewExclusiveServiceService {
  pics: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.pics = database.list('pics');
  }

  getPics(){
    return this.pics;
  }

}
