import { Component, Input,Output, EventEmitter  } from "@angular/core";
import { AppState, Word } from "../../types";
import { Store } from '@ngrx/store';
;
@Component ({
    selector: 'app-word',
    templateUrl: './word-info.component.html'
})

export class wordInfoComponent {
    @Input() wordInfo : Word;

    constructor(private store: Store<AppState>){}

    removeWord() {
        this.store.dispatch({type: 'REMOVE_WORD',_id: this.wordInfo._id});
    }
  
    toggleWord() {
        this.store.dispatch({type: 'TOGGLE_WORD',_id: this.wordInfo._id});
    }
}