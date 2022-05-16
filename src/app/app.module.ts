import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCanvasModule } from 'ngx-canvas';

import { AppComponent } from './app.component';
import { CaseEditorComponent } from './components/case-editor/case-editor.component';
import { CaseSettingsComponent } from './components/case-settings/case-settings.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CaseEditorComponent,
    CaseSettingsComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgxCanvasModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
