import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { shouldShowFormReducer } from './ngrx123/shouldShowFormReducer';
import { wordReducer  } from './ngrx123/wordReducer';
import { filterStatusReducer  } from './ngrx123/filterStatusReducer';

import { AppComponent } from './app.component';

import { wordFormComponent } from './Components/Bai3/word-form.component';
import { wordFilterComponent } from './Components/Bai3/word-filter.component';
import { wordInfoComponent } from './Components/Bai3/word-info.component';
import { WordDetailComponent } from './word-detail.component';
import { WordListComponent } from './word-list.component';

import { WordService } from './word.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routeConfig: Routes = [
  // { path: '', redirectTo:'/list', pathMatch: 'full ' },
  { path: 'list', component: WordListComponent },
  { path: 'detail/:_id', component: WordDetailComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    wordFormComponent,
    wordFilterComponent, 
    wordInfoComponent, 
    SignInFormComponent, 
    SignUpFormComponent,
    WordDetailComponent,
    WordListComponent,
    PageNotFoundComponent
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
    }),
    RouterModule.forRoot(routeConfig)
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
