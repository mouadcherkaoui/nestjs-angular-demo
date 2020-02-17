import { AggregateRoot } from "@nestjs/cqrs";
import { AddRepoEvent } from '../events/addRepoEvent';
export class Account extends AggregateRoot {
  constructor() {
    super();
  }

  repoAdded(repo) {
    this.apply(new AddRepoEvent(repo));
  }
}
