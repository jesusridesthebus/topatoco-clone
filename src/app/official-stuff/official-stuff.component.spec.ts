import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialStuffComponent } from './official-stuff.component';

describe('OfficialStuffComponent', () => {
  let component: OfficialStuffComponent;
  let fixture: ComponentFixture<OfficialStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
