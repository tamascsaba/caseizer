import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSettingsComponent } from './case-settings.component';

describe('CaseSettingsComponent', () => {
  let component: CaseSettingsComponent;
  let fixture: ComponentFixture<CaseSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
