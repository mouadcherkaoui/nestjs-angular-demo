import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { AddRepoEvent } from '../events/add-repo';
import { map } from 'rxjs/operators';

@Injectable()
export class FirestoreSagas {
  @Saga()
  repoAdded = (events$: Observable<any>): Observable<any> => {
    return events$.pipe(
      ofType(AddRepoEvent),
      map((event) => console.log("REPO_ADD:", event.repository)),
    );
  }
}
