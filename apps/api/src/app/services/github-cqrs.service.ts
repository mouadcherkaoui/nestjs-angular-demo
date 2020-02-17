import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus, ofType} from '@nestjs/cqrs';

import * as admin from 'firebase-admin';
import { AddRepoCommand } from '../commands/add-repo';
import { AddRepoEvent} from '../events/add-repo';
// const firestore = admin.firestore();
// const firestore = firebaseApp.firestore();
@Injectable()
export class GithubCqrsService {
  /**
   *
   */
  constructor(readonly commnadBus: CommandBus, readonly eventBus: EventBus) {
    eventBus.pipe(ofType(AddRepoEvent))
      .subscribe(v => console.log("event:", v.repository))
  }

  getCollection(col){
    return admin.firestore().collection(col).get().then(v => console.log(v));
  }

  putData(){
    this.commnadBus.execute(new AddRepoCommand({id: 'test123', name: 'test-repo', descriptionm: "description"}))
    // return admin.firestore().collection('test').add({id: 'test123'})
  }

  getData(id, callback){
    return admin.firestore().collection('test').doc(id).get().then(callback);
  }
}
