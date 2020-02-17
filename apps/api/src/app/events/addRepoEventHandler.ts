import { AddRepoEvent } from './addRepoEvent';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';

@EventsHandler(AddRepoEvent)
export class AddRepoEventHandler implements IEventHandler<AddRepoEvent> {
  constructor() {}

  handle(event: AddRepoEvent) {
    // logic
    console.log(event.repository);
  }
}
