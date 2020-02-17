import { IQuery } from '@nestjs/cqrs'

export class GetTopReposQuery implements IQuery {
  constructor(public date?: string) {

  }
}
