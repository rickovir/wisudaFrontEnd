import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmhsComponent } from './loginmhs.component';

describe('LoginmhsComponent', () => {
  let component: LoginmhsComponent;
  let fixture: ComponentFixture<LoginmhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
