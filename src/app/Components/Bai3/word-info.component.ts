import { Component, Input,Output, EventEmitter  } from "@angular/core";
import { word } from "../../types";

@Component ({
    selector: 'app-word-info',
    templateUrl: './word-info.component.html'
})

export class wordInfoComponent {
    @Input() wordInfo : word;
    @Output() RemoveWord = new EventEmitter<string>();
    @Output() Toggle = new EventEmitter<string>();

    removeWord() {
        this.RemoveWord.emit(this.wordInfo._id);
    }
    toggle() {
        this.Toggle.emit(this.wordInfo._id);
    }

}