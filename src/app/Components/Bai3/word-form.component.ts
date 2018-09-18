import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Word } from '../../types'
import { Observable } from '../../../../node_modules/rxjs';

import {WordService} from '../../word.service'  ;



@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})


export class wordFormComponent {
    shouldShowForm: Observable<boolean>;
    constructor (private store : Store<AppState>,private wordService: WordService) {
        this.shouldShowForm = this.store.select('shouldShowForm');
    }
  
    txtEn = '';
    txtVn = '';
    showForm() { this.store.dispatch({ type: 'SHOW_FORM' }); }
    hideForm() { this.store.dispatch({ type: 'HIDE_FORM' }); }

    addWord() {
        const { txtEn, txtVn } = this;
        this.wordService.addWord(txtEn, txtVn);
    }
    //     const word: Word = {
    //         _id: Math.random() +'',
    //         en: txtEn,
    //         vn: txtVn,
    //         isRemember: false
    //     };
    //     this.store.dispatch({ type: 'ADD_WORD', word});
    //     this.txtEn ='';
    //     this.txtVn ='';
    // }
}