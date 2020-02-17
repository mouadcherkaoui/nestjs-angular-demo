import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import * as admin from 'firebase-admin';

import { LikeRepoCommand } from './like-repo.command';
import { LikeRepoEvent } from '../../events';

@CommandHandler(LikeRepoCommand)
export class LikeRepoCommandHandler implements ICommandHandler<LikeRepoCommand> {
  /**
   *
   */
  constructor(private readonly eventBus: EventBus) {

  }
  async execute(command: LikeRepoCommand): Promise<any> {
    const result = await admin.firestore().collection('test').add(command.repository);
    this.eventBus.publish(new LikeRepoEvent(result))
  }

}

