import { LikeRepoEvent } from './like-repo.event';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';

@EventsHandler(LikeRepoEvent)
export class LikeRepoEventHandler implements IEventHandler<LikeRepoEvent> {
  constructor() {}

  handle(event: LikeRepoEvent) {
    // logic
    console.log(event.repository);
  }
}
