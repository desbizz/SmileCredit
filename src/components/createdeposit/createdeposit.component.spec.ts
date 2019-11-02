import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedepositComponent } from './createdeposit.component';

describe('CreatedepositComponent', () => {
  let component: CreatedepositComponent;
  let fixture: ComponentFixture<CreatedepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
