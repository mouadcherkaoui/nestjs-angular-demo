import { IQuery } from '@nestjs/cqrs'

export class GetReposQuery implements IQuery {
  constructor(public user: any) {

  }
}
