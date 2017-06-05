import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireRecipientComponent } from './enquire-recipient.component';

describe('EnquireRecipientComponent', () => {
  let component: EnquireRecipientComponent;
  let fixture: ComponentFixture<EnquireRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquireRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquireRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
