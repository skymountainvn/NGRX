import { Component } from '@angular/core';
import { Word, AppState } from './types';

import { Store} from '@ngrx/store';
import { Observable } from '../../node_modules/rxjs';
import { WorkspaceLoader } from 'node_modules.1/@angular/cli/models/workspace-loader';
// import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words:Word[];
  filterStatus: string;
  constructor(private store: Store<AppState>) {
    // this.words = this.store.select('words');
    this.store.select('words')
    .subscribe(words => this.words = words);
    this.store.select('filterStatus')
    .subscribe(filterStatus => this.filterStatus = filterStatus);
  }
      
  get filterWords(): Word[] {
    return this.words.filter(word => {
      if(this.filterStatus === 'SHOW_ALL') return true;
      if(this.filterStatus === 'SHOW_FORGOT') return !word.isRemember ;
      return word.isRemember;
    });
  }
}
