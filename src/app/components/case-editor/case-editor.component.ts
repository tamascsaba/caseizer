import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { phoneImage } from '@app/constants/phone-image.constant';
import { phoneRect } from '@app/constants/phone-rect.constant';
import { phoneText } from '@app/constants/phone-text.constant';
import { TextSettings } from '@app/interfaces/text-settings.interface';
import { CaseEditorService } from '@app/services/case-editor.service';
import { DrawProps, RectProps, TextProps } from 'ngx-canvas/lib/type';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-case-editor',
  templateUrl: './case-editor.component.html',
  styleUrls: ['./case-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseEditorComponent implements OnInit {
  public canvasOptions = new BehaviorSubject<DrawProps>(
    this.caseEditorService.canvasOptions
  );

  constructor(private readonly caseEditorService: CaseEditorService) {}

  ngOnInit() {
    this.caseEditorService.settings.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(this.setSettings);
  }

  public downloadCase() {
    const image = document
      .querySelector<HTMLCanvasElement>('#phone-case canvas')
      ?.toDataURL('image/png', 1)
      ?.replace('image/png', 'image/octet-stream') as string;
    const link = document.createElement('a');
    link.download = 'my-case.png';
    link.href = image;
    link.click();
  }

  private setSettings = (settings: TextSettings) => {
    const backgroundProps: RectProps = {
      ...phoneRect,
      backgroundColor: settings.backgroundColor
    };

    const textProps: TextProps = {
      ...phoneText,
      content: settings.text,
      color: settings.textColor,
      left: settings.positionX,
      top: settings.positionY,
      fontSize: settings.fontSize,
      lineHeight: settings.lineHeight
    };

    this.canvasOptions.next({
      ...this.caseEditorService.canvasOptions,
      views: [backgroundProps, phoneImage, textProps]
    });
  };
}
