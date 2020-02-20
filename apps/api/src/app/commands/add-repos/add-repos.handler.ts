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
    const batch = admin.firestore().batch();
    command.repositories.forEach((repo: any) => {
      const doc = admin.firestore().collection('repositories').doc(repo.name);
      batch.create(doc, repo);
    });
    const result = await batch.commit();
    this.eventBus.publish(new AddReposEvent(result));
  }

}

