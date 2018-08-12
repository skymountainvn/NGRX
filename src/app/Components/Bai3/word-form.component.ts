import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Word } from '../../types'
import { Observable } from '../../../../node_modules/rxjs';
@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})

export class wordFormComponent {
    shouldShowForm: Observable<boolean>;
    constructor (private store : Store<AppState>) {
        this.shouldShowForm = this.store.select('shouldShowForm');
    }


    txten = ' ';
    txtvn = ' ';

    showForm() {this.store.dispatch({ type: "SHOW_FORM"}); }
    hideForm() {this.store.dispatch({ type: "HIDE_FORM"}); }
    addWord() {
        const { txten, txtvn} = this;
        const word: Word = { 
            _id: Math.random + ' ',
            en: txten,
            vn: txtvn,
            isRemember: false
        };
        this.store.dispatch({ type: 'ADD_WORD', word});
        this.txten = ' ';
        this.txtvn = ' ';
    }
}