import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CaseEditorService } from '@app/services/case-editor.service';

@Component({
  selector: 'app-case-settings',
  templateUrl: './case-settings.component.html',
  styleUrls: ['./case-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseSettingsComponent {
  public settingsFormGroup = this.caseEditorService.settings;

  constructor(private readonly caseEditorService: CaseEditorService) {}
}
