import { AddReposEvent } from './add-repos.event';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';

@EventsHandler(AddReposEvent)
export class AddReposEventHandler implements IEventHandler<AddReposEvent> {
  constructor() {}

  handle(event: AddReposEvent) {
    // logic
    console.log(event.repositories);
  }
}
