import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { from } from 'rxjs';
@Injectable()
export class GithubService {
  apiBase:string;
  constructor(private readonly http:HttpService) {
    this.apiBase = `https://api.github.com`;
  }
  getTopRepos(date?: string) {
    const searchEndpoint = `${this.apiBase}/search/repositories?q=created:>${date}&sort=stars&order=desc`;
    return this.http.get(searchEndpoint).pipe(map(res => res.data))
  }

  getUserRepos(name: string){
    const searchEndpoint = `${this.apiBase}/users/${name}/repos`;
    return this.http.get(searchEndpoint).pipe(map(res => res.data))
  }

  getRepoCommits(user:string, repo: string){
    const repoCommitsEndpoint = `${this.apiBase}/repos/${user}/${repo}/commits`;
    return this.http.get(repoCommitsEndpoint).pipe(map(res => res.data));
  }    
}
