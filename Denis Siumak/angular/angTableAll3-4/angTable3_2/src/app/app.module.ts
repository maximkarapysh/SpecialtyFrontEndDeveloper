import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
