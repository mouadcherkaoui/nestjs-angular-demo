import { Module, HttpModule } from '@nestjs/common';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './services/github.service';
import { GithubCqrsService } from './services/github-cqrs.service';
import { CqrsModule, EventBus } from '@nestjs/cqrs';

import { AddRepoCommandHandler } from './commands/add-repo';
import { AddRepoEventHandler } from './events/add-repo';

import {  GetReposQueryHandler,
  GetTopReposQueryHandler, GetRepoCommitsQueryHandler } from './queries';

import { FirestoreSagas } from './services/Firestore-sagas';

export const CommandHandlers = [AddRepoCommandHandler];
export const EventHandlers =  [AddRepoEventHandler];
export const QueryHandlers =  [GetReposQueryHandler, GetTopReposQueryHandler, GetRepoCommitsQueryHandler];

@Module({
  imports: [HttpModule, CqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    GithubService,
    GithubCqrsService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    EventBus,
    FirestoreSagas
  ]
})

export class AppModule {}
