import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DrawProps } from 'ngx-canvas/lib/type';

import { phoneImage } from '../constants/phone-image.constant';
import { phoneRect } from '../constants/phone-rect.constant';
import { phoneText } from '../constants/phone-text.constant';

@Injectable({
  providedIn: 'root'
})
export class CaseEditorService {
  settings = new FormGroup({
    text: new FormControl(phoneText.content),
    positionX: new FormControl(phoneText.left),
    positionY: new FormControl(phoneText.top),
    width: new FormControl(phoneText.width),
    height: new FormControl(50),
    fontSize: new FormControl(phoneText.fontSize),
    lineHeight: new FormControl(phoneText.lineHeight),
    horizontalAlign: new FormControl(),
    verticalAlign: new FormControl(),
    backgroundColor: new FormControl(phoneRect.backgroundColor),
    textColor: new FormControl(phoneText.color)
  });
  canvasOptions: DrawProps = {
    debug: true,
    width: 336,
    height: 650,
    backgroundColor: 'transparent',
    views: [phoneRect, phoneImage, phoneText]
  };
}
