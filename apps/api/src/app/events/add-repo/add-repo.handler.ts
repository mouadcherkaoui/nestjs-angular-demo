import { AddRepoEvent } from './add-repo.event';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';

@EventsHandler(AddRepoEvent)
export class AddRepoEventHandler implements IEventHandler<AddRepoEvent> {
  constructor() {}

  handle(event: AddRepoEvent) {
    // logic
    console.log(event.repository);
  }
}
