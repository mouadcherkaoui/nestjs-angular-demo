import { Component, OnInit } from '@angular/core';
import { GithubService, NestApiService } from '../../services';

@Component({
  selector: 'gemography-fire-repos',
  templateUrl: './fire-repos.component.html',
  styleUrls: ['./fire-repos.component.css']
})
export class FireReposComponent implements OnInit {
  repos: any;
  constructor(private readonly ghSvc: GithubService, 
    private readonly apiSvc: NestApiService) { }

  ngOnInit(): void {
    this.apiSvc.getTopRepos()
      .subscribe((repos:any) => this.repos = repos.items);
  }

  pushRepos() {
    const payload = this.repos.slice(0, 20).map(r => ({ name: r.name, description: r.description, url: r.html_url }));
    console.log(payload);
    this.apiSvc.saveRepos(payload).subscribe(r => console.log(r)); 
  }

}
