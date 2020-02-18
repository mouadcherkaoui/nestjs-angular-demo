import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTopReposQuery } from './get-toprepos.query';
import { HttpService } from '@nestjs/common';
import { GithubService } from '../../services/github.service';

@QueryHandler(GetTopReposQuery)
export class GetTopReposQueryHandler implements IQueryHandler<GetTopReposQuery, any[]> {
  /**
   *
   */
  constructor(private readonly ghService: GithubService) {

  }
  async execute(query: GetTopReposQuery): Promise<any[]> {
    return await this.ghService.getTopRepos(query.date).toPromise();
  }

}
