import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemhsComponent } from './homemhs.component';

describe('HomemhsComponent', () => {
  let component: HomemhsComponent;
  let fixture: ComponentFixture<HomemhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
