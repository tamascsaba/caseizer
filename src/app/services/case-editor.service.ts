import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CaseEditorService {
  settings = new FormGroup({
    text: new FormControl('My awesome case!'),
    positionX: new FormControl(50),
    positionY: new FormControl(50),
    width: new FormControl(50),
    height: new FormControl(50),
    fontSize: new FormControl(14),
    lineHeight: new FormControl(20),
    horizontalAlign: new FormControl(),
    verticalAlign: new FormControl()
  });
}
