import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import * as admin from 'firebase-admin';

import { AddReposCommand } from './add-repos.command';
import { AddReposEvent } from '../../events/add-repos';

@CommandHandler(AddReposCommand)
export class AddReposCommandHandler implements ICommandHandler<AddReposCommand> {
  /**
   *
   */
  constructor(private readonly eventBus: EventBus) {

  }
  async execute(command: AddReposCommand): Promise<any> {
    const result = await admin.firestore().collection('repositories').add(command.repositories);
    this.eventBus.publish(new AddReposEvent(command.repositories));
  }

}

