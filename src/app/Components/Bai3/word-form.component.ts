import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../types'
import { Observable } from '../../../../node_modules/rxjs';
@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})

export class wordFormComponent {
    shouldShowForm : Observable <boolean> ;
    constructor (private store : Store<AppState>) {
        this.shouldShowForm = this.store.select('shoudShowForm');
    }
    txten = ' ';
    txtvn = ' ';

}