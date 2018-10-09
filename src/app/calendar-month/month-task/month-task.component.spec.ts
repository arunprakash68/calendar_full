import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonthTaskComponent} from './month-task.component';

describe('MonthTaskComponent', () => {
  let component: MonthTaskComponent;
  let fixture: ComponentFixture<MonthTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
