import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetReposQuery } from './get-repos.query';
import { HttpService } from '@nestjs/common';
import { GithubService } from '../../services/github.service';

@QueryHandler(GetReposQuery)
export class GetReposQueryHandler implements IQueryHandler<GetReposQuery, any[]> {
  /**
   *
   */
  constructor(private readonly ghService: GithubService) {

  }
  async execute(query: GetReposQuery): Promise<any[]> {
    return await this.ghService.getUserRepos(query.user).toPromise();
  }

}
