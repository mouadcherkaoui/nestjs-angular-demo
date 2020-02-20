import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireReposComponent } from './fire-repos.component';

describe('FireReposComponent', () => {
  let component: FireReposComponent;
  let fixture: ComponentFixture<FireReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
