import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store'

import { counter } from './ngrx123/counter';
import { shouldShowFormReducer } from './ngrx123/shouldShowFormReducer';
import { wordReducer  } from './ngrx123/wordReducer';


import { AppComponent } from './app.component';

import { wordInfoComponent } from './Components/Bai3/word-info.component';
import { wordFormComponent } from './Components/Bai3/word-form.component';
import { wordFilterComponent } from './Components/Bai3/word-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    wordInfoComponent,
    wordFormComponent,
    wordFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ 
      shouldShowForm : shouldShowFormReducer, 
      words : wordReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
