import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramsComponent } from './instagrams.component';

describe('InstagramsComponent', () => {
  let component: InstagramsComponent;
  let fixture: ComponentFixture<InstagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
