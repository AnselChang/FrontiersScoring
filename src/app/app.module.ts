import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { FieldsListComponent } from './components/fields-list/fields-list.component';
import { ToggleFieldComponent } from './components/toggle-field/toggle-field.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FieldLabelBlockComponent } from './blocks/field-label-block/field-label-block.component';
import { FullScoreComponent } from './components/full-score/full-score.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberFieldComponent,
    FieldsListComponent,
    ToggleFieldComponent,
    TopBarComponent,
    FieldLabelBlockComponent,
    FullScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
