import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';

@NgModule({
  declarations:
    [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MonacoEditorModule,
  ],
  providers: [{
    provide: MONACO_PATH,
    useValue: 'https://unpkg.com/monaco-editor@0.24.0/min/vs'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
