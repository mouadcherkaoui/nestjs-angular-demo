import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetRepoCommitsQuery } from './get-repo-commits.query';
import { HttpService } from '@nestjs/common';
import { GithubService } from '../../services/github.service';

@QueryHandler(GetRepoCommitsQuery)
export class GetRepoCommitsQueryHandler implements IQueryHandler<GetRepoCommitsQuery, any[]> {
  /**
   *
   */
  constructor(private readonly ghService: GithubService) {

  }
  async execute(query: GetRepoCommitsQuery): Promise<any[]> {
    return await this.ghService.getRepoCommits(query.user, query.repo).toPromise();
  }

}
