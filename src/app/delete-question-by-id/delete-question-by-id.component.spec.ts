import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionByIdComponent } from './delete-question-by-id.component';

describe('DeleteQuestionByIdComponent', () => {
  let component: DeleteQuestionByIdComponent;
  let fixture: ComponentFixture<DeleteQuestionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQuestionByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuestionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
