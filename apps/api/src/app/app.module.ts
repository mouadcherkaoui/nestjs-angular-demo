import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './services/github.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, GithubService]
})
export class AppModule {}
