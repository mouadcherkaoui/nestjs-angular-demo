import { IQuery } from '@nestjs/cqrs'

export class GetRepoCommitsQuery implements IQuery {
  constructor(public user: string, public repo: string) {

  }
}
