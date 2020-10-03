import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallQuestionsComponent } from './listall-questions.component';

describe('ListallQuestionsComponent', () => {
  let component: ListallQuestionsComponent;
  let fixture: ComponentFixture<ListallQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
