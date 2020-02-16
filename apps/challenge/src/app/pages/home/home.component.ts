import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gemography-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly http: HttpClient) { }
  markdown: string;
  ngOnInit(): void {
    // this.http.get('https://github.com/mouadcherkaoui/gemo-challenge/raw/master/README.md')
    //   .subscribe(res => {
    //     console.log(res);
    //   })
  }

}
