import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPostJobComponent } from './recruiter-post-job.component';

describe('RecruiterPostJobComponent', () => {
  let component: RecruiterPostJobComponent;
  let fixture: ComponentFixture<RecruiterPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPostJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
