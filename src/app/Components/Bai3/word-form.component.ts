import { Component, Input } from "@angular/core";
import { word } from '../../types';

@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})

export class wordFormComponent {
    isShowForm = false;
    txten = ' ';
    txtvn = ' ';

}