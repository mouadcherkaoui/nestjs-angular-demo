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
    const searchEndpoint = `${this.apiBase}/users/${name}/repos`;
    return this.http.get(searchEndpoint);
  }
}
