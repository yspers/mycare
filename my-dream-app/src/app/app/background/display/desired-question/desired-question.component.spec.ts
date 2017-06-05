import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredQuestionComponent } from './desired-question.component';

describe('DesiredQuestionComponent', () => {
  let component: DesiredQuestionComponent;
  let fixture: ComponentFixture<DesiredQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiredQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiredQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
