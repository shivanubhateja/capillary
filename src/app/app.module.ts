import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PosFormComponentComponent } from './components/pos-form-component/pos-form-component.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BillingItemComponent } from './components/billing-item/billing-item.component';
import { PosInputFieldComponent } from './components/pos-input-field/pos-input-field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    PosFormComponentComponent,
    PageHeaderComponent,
    BillingItemComponent,
    PosInputFieldComponent,
    DatePickerComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
