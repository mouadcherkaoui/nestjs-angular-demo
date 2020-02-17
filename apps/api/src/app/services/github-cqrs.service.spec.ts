import { Test, TestingModule } from '@nestjs/testing';
import { GithubCqrsService } from './github-cqrs.service';

describe('GithubCqrsService', () => {
  let service: GithubCqrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubCqrsService],
    }).compile();

    service = module.get<GithubCqrsService>(GithubCqrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
