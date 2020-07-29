import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTaskListComponent } from './inside-task-list.component';

describe('InsideTaskListComponent', () => {
  let component: InsideTaskListComponent;
  let fixture: ComponentFixture<InsideTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
