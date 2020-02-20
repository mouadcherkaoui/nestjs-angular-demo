import { Module, HttpModule } from '@nestjs/common';


import { AppController } from './app.controller';
import { GithubController } from './controllers/github.controller';

import { AppService } from './app.service';
import { GithubService } from './services/github.service';
import { CqrsModule, EventBus } from '@nestjs/cqrs';

import { AddRepoCommandHandler, AddReposCommandHandler, LikeRepoCommandHandler } from './commands';
import { AddRepoEventHandler, AddReposEventHandler, LikeRepoEventHandler } from './events';

import {  GetReposQueryHandler,
  GetTopReposQueryHandler, GetRepoCommitsQueryHandler } from './queries';

import { FirestoreSagas } from './services/Firestore-sagas';

export const CommandHandlers = [AddRepoCommandHandler, AddReposCommandHandler, LikeRepoCommandHandler];
export const EventHandlers =  [AddRepoEventHandler, AddReposEventHandler, LikeRepoEventHandler];
export const QueryHandlers =  [GetReposQueryHandler, GetTopReposQueryHandler, GetRepoCommitsQueryHandler];

@Module({
  imports: [HttpModule, CqrsModule],
  controllers: [AppController, GithubController],
  providers: [
    AppService,
    GithubService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    EventBus,
    FirestoreSagas
  ]
})

export class AppModule {}
