import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'gemography-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  constructor() { }
  @Input() 
  IsLoggedIn: boolean;
  ngOnInit(): void {
  }

}
