import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskComponent } from './createtask.component';

describe('CreatetaskComponent', () => {
  let component: CreatetaskComponent;
  let fixture: ComponentFixture<CreatetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
