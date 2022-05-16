import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { CaseEditorService } from './case-editor.service';

describe('CaseEditorService', () => {
  let service: CaseEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain settings', () => {
    expect(service.settings).toBeTruthy();
    expect(service.settings).toBeInstanceOf(FormGroup);
  });
});
