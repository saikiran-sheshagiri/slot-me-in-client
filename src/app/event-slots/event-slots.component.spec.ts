import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSlotsComponent } from './event-slots.component';

describe('EventSlotsComponent', () => {
  let component: EventSlotsComponent;
  let fixture: ComponentFixture<EventSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
