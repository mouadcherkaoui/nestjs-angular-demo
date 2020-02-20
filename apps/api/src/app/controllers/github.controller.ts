import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AddReposCommand } from '../commands';
import { Response } from 'express';

@Controller()
export class GithubController {
    constructor(private readonly commandBus: CommandBus){

    }

    @Post('github/repos')
    postRepos(@Body() repos: [], @Res() res: Response){
      const result = this.commandBus.execute(new AddReposCommand(repos));
      console.log(result);
      res.status(HttpStatus.CREATED).send();
    }
}
