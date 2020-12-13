import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentissueComponent } from './currentissue.component';

describe('CurrentissueComponent', () => {
  let component: CurrentissueComponent;
  let fixture: ComponentFixture<CurrentissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentissueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
