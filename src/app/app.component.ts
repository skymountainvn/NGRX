import { Component } from '@angular/core';
import { Word, AppState } from './types';
import { Http, Response } from '@angular/http';
import { Store} from '@ngrx/store';
import { Observable } from '../../node_modules/rxjs';
// import { WorkspaceLoader } from 'node_modules.1/@angular/cli/models/workspace-loader';
// import 'rxjs/add/operator/combineLatest';
// import { Observable } from 'rxjs/Observable'
// import { toPromise } from 'rxjs/add/operator/toPromise';
import { WordService } from './word.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words:Word[];
  filterStatus: string;
  constructor(
    private store: Store<AppState>, 
    private http: Http,
    private WordService: WordService
  ) {
    // this.words = this.store.select('words');
    // const $word = this.store.select('words');
    // const $filterStatus = this.store.select('filterStatus');

    this.store.select('words')
    .subscribe(words => this.words = words);

    this.store.select('filterStatus')
    .subscribe(filterStatus => this.filterStatus = filterStatus);
  
    this.WordService.getWords()
    .then(words => this.store.dispatch({ type: 'SET_WORDS',words}));

    this.WordService.getTemp()
    .then(temp => alert(temp));
  }
  get filterWords(): Word[] {
    return this.words.filter(word => {
      if(this.filterStatus === 'SHOW_ALL') return true;
      if(this.filterStatus === 'SHOW_FORGOT') return !word.isRemember ;
      return word.isRemember;
    });
  }

}
