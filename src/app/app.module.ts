import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store'

import { counter } from './ngrx123/counter';

import { AppComponent } from './app.component';
// import { Bai1Component } from './Components/Bai1/bai1.component';
// import { Bai2Component } from './Components/Bai1/bai2.component';
// import { Bai3Component } from './Components/Bai3/bai3.component';
// import { ParentComponent } from './Components/Output/parent.component';
// import { ChildComponent } from './Components/Output/child.component';
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
    StoreModule.forRoot({count: counter })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
