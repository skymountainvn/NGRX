import { Component, Input,Output, EventEmitter  } from "@angular/core";
import { Word } from "../../types";

@Component ({
    selector: 'app-word',
    templateUrl: './word-info.component.html'
})

export class wordInfoComponent {
    @Input() wordInfo : Word;
    @Output() RemoveWord = new EventEmitter<string>();
    @Output() Toggle = new EventEmitter<string>();

    removeWord() {
        this.RemoveWord.emit(this.wordInfo._id);
    }
    toggle() {
        this.Toggle.emit(this.wordInfo._id);
    }

}