import { Component, OnInit } from '@angular/core';
import { CaseEditorService } from '@app/services/case-editor.service';

@Component({
  selector: 'app-case-editor',
  templateUrl: './case-editor.component.html',
  styleUrls: ['./case-editor.component.scss']
})
export class CaseEditorComponent implements OnInit {
  constructor(private readonly caseEditorService: CaseEditorService) {}

  ngOnInit() {
    this.caseEditorService.settings.valueChanges.subscribe(console.log);
  }
}
