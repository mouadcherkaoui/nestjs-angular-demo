import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NestApiService {
  apiBase: string;
  constructor(private readonly http: HttpClient) {
    this.apiBase = environment.API_URL;
  }

  getTopRepos(date?: string) {
    const searchEndpoint = `${this.apiBase}/toprepos`;
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

  saveRepos(repos: []){
    const repoCommitsEndpoint = `${this.apiBase}/github/repos`;
    return this.http.post(repoCommitsEndpoint, repos);
  }  
}
