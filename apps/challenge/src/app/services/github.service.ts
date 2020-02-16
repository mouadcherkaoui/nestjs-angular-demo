import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiBase: string;
  constructor(private readonly http: HttpClient) {
    this.apiBase = `https://api.github.com`;
  }

  getTopRepos(date?: string) {
    const searchEndpoint = `${this.apiBase}/search/repositories?q=created:>${date}&sort=stars&order=desc`;
    return this.http.get(searchEndpoint);
  }

  getUserRepos(name: string){
    const reposEndpoint = `${this.apiBase}/users/${name}/repos`;
    return this.http.get(reposEndpoint);
  }

  getRepoCommits(user:string, repo: string){
    const repoCommitsEndpoint = `${this.apiBase}/repos/${user}/${repo}/commits`;
    return this.http.get(repoCommitsEndpoint);
  }
}
