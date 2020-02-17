import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import * as admin from 'firebase-admin';

import { AddRepoCommand } from './add-repo.command';
import { AddRepoEvent } from '../../events/add-repo';

@CommandHandler(AddRepoCommand)
export class AddRepoCommandHandler implements ICommandHandler<AddRepoCommand> {
  /**
   *
   */
  constructor(private readonly eventBus: EventBus) {

  }
  async execute(command: AddRepoCommand): Promise<any> {
    const result = await admin.firestore().collection('test').add(command.repository);
    this.eventBus.publish(new AddRepoEvent(result))
  }

}

