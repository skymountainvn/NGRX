import {Component, Output, Input, EventEmitter} from "@angular/core";
import { sharedStylesheetJitUrl } from "@angular/compiler";
// list and button change color
@Component({
    selector:"bai3",
    templateUrl: './bai3.component.html',
    styleUrls: ['./bai3.component.css']

})

export class Bai3Component {
    txten=' ';
    txtvn=' ';
    isShowForm = false;
    words: word[] = [
        {en:'ONE', vn:"MOT", isRemember: true, _id:'a1'},
        {en:'TWO', vn:"HAI", isRemember: false, _id:'a2'},
        {en:'THREE', vn:"BA", isRemember: true, _id:'a3'},
        {en:'FOUR', vn:"BON", isRemember: false, _id:'a4'},
        {en:'FIVE', vn:"NAM", isRemember: true, _id:'a5'}
    ];

    wordSize1= {
        fontWeight: 500,
        color: 'green'
    }
    wordSize2= {
        fontWeight: 900,
        color: 'red'
    }


    removeWord(_id:string) {
        const index = this.words.findIndex(word => word._id === _id);
        this.words.splice(index, 1);
    }

    // toggle(_id:string) {
    //     const word = this.words.find(word => word._id === _id);
    //     word.isRemember = !word.isRemember;
    // }

    // addWord() {
    //     const { txten, txtvn} = this;
    //     this.words.push({
    //         en: txten, vn: txtvn, isRemember: false, _id:Math.random()+ ' '
    //     });
    //     this.txten = '';
    //     this.txtvn = '';
    // }

    onAddWord(word: word) {
        this.words.unshift(word);
    }

    // toggleForm(){
    //     this.isShowForm = !this.isShowForm;
    // }

}

interface word {
    en: string;
    vn: string;
    _id: string;
    isRemember : boolean;
}
   


