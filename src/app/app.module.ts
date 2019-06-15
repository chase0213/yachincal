import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { YachincalComponent } from './containers/yachincal/yachincal.component';
import { YachingraphComponent } from './components/yachingraph/yachingraph.component';
import { YachinformComponent } from './components/yachinform/yachinform.component';

@NgModule({
  declarations: [
    AppComponent,
    YachincalComponent,
    YachingraphComponent,
    YachinformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
