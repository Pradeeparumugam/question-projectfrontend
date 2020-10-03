import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetquestionByIdComponent } from './getquestion-by-id.component';

describe('GetquestionByIdComponent', () => {
  let component: GetquestionByIdComponent;
  let fixture: ComponentFixture<GetquestionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetquestionByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetquestionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
