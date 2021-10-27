import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReviewFormComponent } from './create-review-form.component';

describe('CreateReviewFormComponent', () => {
  let component: CreateReviewFormComponent;
  let fixture: ComponentFixture<CreateReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
