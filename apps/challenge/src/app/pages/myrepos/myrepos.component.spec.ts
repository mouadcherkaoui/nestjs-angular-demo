import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreposComponent } from './myrepos.component';

describe('MyreposComponent', () => {
  let component: MyreposComponent;
  let fixture: ComponentFixture<MyreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
