import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { SortPipePipe } from './pipes/sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableComponent,
    SearchPipePipe,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
