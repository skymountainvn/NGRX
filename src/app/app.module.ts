import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store'
import { HttpModule } from '@angular/http'

import { shouldShowFormReducer } from './ngrx123/shouldShowFormReducer';
import { wordReducer  } from './ngrx123/wordReducer';
import { filterStatusReducer  } from './ngrx123/filterStatusReducer';

import { AppComponent } from './app.component';

import { wordFormComponent } from './Components/Bai3/word-form.component';
import { wordFilterComponent } from './Components/Bai3/word-filter.component';
import { wordInfoComponent } from './Components/Bai3/word-info.component';

import { WordService } from './word.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'

@NgModule({
  declarations: [
    AppComponent,
    wordFormComponent,
    wordFilterComponent, 
    wordInfoComponent, 
    SignInFormComponent, SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ 
      shouldShowForm : shouldShowFormReducer, 
      words : wordReducer,
      filterStatus : filterStatusReducer
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
