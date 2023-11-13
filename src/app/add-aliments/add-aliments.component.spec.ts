import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentsComponent } from './add-aliments.component';

describe('AddAlimentsComponent', () => {
  let component: AddAlimentsComponent;
  let fixture: ComponentFixture<AddAlimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlimentsComponent]
    });
    fixture = TestBed.createComponent(AddAlimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
