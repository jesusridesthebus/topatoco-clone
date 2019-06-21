import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExclusiveComponent } from './new-exclusive.component';

describe('NewExclusiveComponent', () => {
  let component: NewExclusiveComponent;
  let fixture: ComponentFixture<NewExclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
