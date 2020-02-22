import { Component, OnInit } from '@angular/core';
import { GithubService, NestApiService } from '../../services';
@Component({
  selector: 'gemography-fire-repos',
  templateUrl: './fire-repos.component.html',
  styleUrls: ['./fire-repos.component.css']
})
export class FireReposComponent implements OnInit {
  repos: any;
  selected = [];
  cols = ['name', 'description', 'url']
  constructor(private readonly ghSvc: GithubService,
    private readonly apiSvc: NestApiService) { }

  ngOnInit(): void {
    this.ghSvc.getTopRepos(this.back30Days())
      .subscribe((repos:any) => this.repos = repos.items);
  }

  pushRepos() {
    const payload = this.selected.slice(0, 20).map(r => ({ name: r.name, description: r.description, url: r.html_url }));
    console.log(payload);
    this.apiSvc.saveRepos(payload).subscribe(r => console.log(r));
  }

  back30Days() {
    const dateToReturn = new Date();
    dateToReturn.setDate(dateToReturn.getDate() - 30);
    return dateToReturn.toISOString().substring(0, 10);
  }

  onAdd(){}
  onEdit(){}
  onDelete(){}
  onExportAll(){}
  onExportSelected(){
    this.pushRepos();
  }
}
