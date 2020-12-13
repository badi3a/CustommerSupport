import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveissueComponent } from './activeissue.component';

describe('ActiveissueComponent', () => {
  let component: ActiveissueComponent;
  let fixture: ComponentFixture<ActiveissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveissueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
