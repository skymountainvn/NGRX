import { Component, Input  } from "@angular/core";
import { AppState, Word } from "../../types";
import { Store } from '@ngrx/store';
import { WordService } from './../../word.service';


@Component ({
    selector: 'app-word',
    templateUrl: './word-info.component.html'
})

export class wordInfoComponent {
    @Input() wordInfo : Word;

    constructor(private store: Store<AppState>, private wordService: WordService){}

    removeWord() {
        this.wordService.removeWord(this.wordInfo._id);
    }
  
    toggleWord() {
        this.wordService.toggleWord(this.wordInfo._id,!this.wordInfo.isRemember);
    }
}