import { Controller, Get, Param } from '@nestjs/common';

import { Message } from '@gemography/api-interfaces';

import { AppService } from './app.service';
import { GithubService } from './services/github.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly ghSvc: GithubService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  /* this function returns the top repositories
     for the last 30 days, as required by the challenge,
     it uses the injected ghSvc instance */
  @Get('toprepos')
  getTopRepos() {
    return this.ghSvc.getTopRepos(this.back30Days());
  }

  /* this function represents the endpoint to get
     the specified user repositories, it demonstrate
     how nestjs simplify the routing patterns */
  @Get('users/:name/repos')
  getUserRepos(@Param('name') name: string) {
    return this.ghSvc.getUserRepos(name);
  }

  /* this function represents the endpoint to get
     the specified user repositories, it demonstrate
     how nestjs simplify the routing patterns */
  @Get('repos/:user/:repo/commits')
  getRepoCommits(
    @Param('user') user: string, 
    @Param('repo') repo: string) {
    
    return this.ghSvc.getRepoCommits(user, repo);
  }  
  /* this function returns the date 30 days ago
    in the formet required by github search api */
  private back30Days(){
    const dateToReturn = new Date();
    dateToReturn.setDate(dateToReturn.getDate()-30);

    return dateToReturn.toISOString().substring(0, 10);
  }
}
