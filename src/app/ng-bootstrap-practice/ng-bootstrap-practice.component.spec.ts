import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapPracticeComponent } from './ng-bootstrap-practice.component';

describe('NgBootstrapPracticeComponent', () => {
  let component: NgBootstrapPracticeComponent;
  let fixture: ComponentFixture<NgBootstrapPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgBootstrapPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgBootstrapPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
