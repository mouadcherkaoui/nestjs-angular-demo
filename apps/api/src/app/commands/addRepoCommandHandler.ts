import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { AddRepoCommand } from './addRepoCommand';
import * as admin from 'firebase-admin';
import { AddRepoEvent } from '../events/addRepoEvent';

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

