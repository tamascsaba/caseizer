import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '@app/app.module';

import { CaseEditorComponent } from './case-editor.component';

describe('CaseEditorComponent', () => {
  let component: CaseEditorComponent;
  let fixture: ComponentFixture<CaseEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseEditorComponent],
      imports: [AppModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
