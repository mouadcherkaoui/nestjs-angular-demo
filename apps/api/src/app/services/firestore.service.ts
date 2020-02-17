import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus, ofType} from '@nestjs/cqrs';

import * as admin from 'firebase-admin';


@Injectable()
export class FireStoreService {
  /**
   *
   */
  constructor(readonly commnadBus: CommandBus,
    readonly eventBus: EventBus) {

  }

  async getCollection(collection: string,
    callback?: Function, onerror?: Function){

    return await admin.firestore()
      .collection(collection)
      .get()
      .then(v => callback(v));
  }

  async postDocument(collection: string, payload: any,
    callback?: Function, onerror?: Function){

    await admin.firestore()
      .collection(collection)
      .add(payload)
      .then(v => callback(v))
      .catch(err => onerror(err));
  }

  async putDocument(collection: string, payload: any,
    callback?: Function, onerror?: Function){

    await admin.firestore()
      .collection(collection)
      .add(payload)
      .then(v => callback(v))
      .catch(err => onerror(err));
  }

  async getDocument(path: string,
    callback?: Function, onerror?: Function){

    return await admin.firestore()
      .collection('test')
      .doc(path)
      .get()
      .then(v => callback(v))
      .catch(err => onerror(err));
  }
}
