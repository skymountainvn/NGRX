import { Component } from '@angular/core';
import { word } from './types';

import {} from '@ngrx/store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    filterStatus = 'SHOW_ALL';
    txten=' ';
    txtvn=' ';
    words: word[] = [
      {en:'ONE', vn:"MOT", isRemember: true, _id:'a1'},
      {en:'TWO', vn:"HAI", isRemember: false, _id:'a2'},
      {en:'THREE', vn:"BA", isRemember: true, _id:'a3'},
      {en:'FOUR', vn:"BON", isRemember: false, _id:'a4'},
      {en:'FIVE', vn:"NAM", isRemember: true, _id:'a5'}
  ];

    // wordSize1= {
    //     fontWeight: 500,
    //     color: 'green'
    // }
    // wordSize2= {
    //     fontWeight: 900,
    //      color: 'red'
    // } 


    // onRemoveWord(_id:string) {
    //     const index = this.words.findIndex(word => word._id === _id);
    //     this.words.splice(index, 1);
    // }

    // onToggle(_id:string) {
    //     const word = this.words.find(word => word._id === _id);
    //     word.isRemember = !word.isRemember;
    // }


    // onAddWord(word: word) {
    //     this.words.unshift(word);
    // }

    // getFilteredWord() {
    //     return this.words.filter(word => {
    //         if (this.filterStatus === 'SHOW_ALL') return true;
    //         if (this.filterStatus === 'SHOW_FORGOT') return !word.isRemember;
    //         return word.isRemember;
    //     });
    // }

    // onChangeFilterStatus(newStatus: string) {
    //     this.filterStatus = newStatus;
    // }
      
}
