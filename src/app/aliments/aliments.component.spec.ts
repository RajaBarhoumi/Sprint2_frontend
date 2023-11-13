import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentsComponent } from './aliments.component';

describe('AlimentsComponent', () => {
  let component: AlimentsComponent;
  let fixture: ComponentFixture<AlimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentsComponent]
    });
    fixture = TestBed.createComponent(AlimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
