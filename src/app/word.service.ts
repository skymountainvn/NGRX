import { Injectable }  from '@angular/core';
import { Http} from '@angular/http';
import { Word, AppState } from './types';
import { Store } from '@ngrx/store'
// import '../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from '../../node_modules/rxjs';
@Injectable()
export class WordService {
    constructor(private http: Http, private store: Store<AppState>) {}
    getTemp() {
        const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Hanoi';
        return this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .catch(resJson => resJson.main.temp);
      
    }

    getWords() {
        const URL = 'http://localhost:3000/word';
        return this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson =>  {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'SET_WORD', words: resJson.words })
            console.log(resJson)
        });
    }


    addWord(en: string, vn: string) {
        const body = { en, vn, isRemember: false };
        const URL = 'http://localhost:3000/word';
        return this.http.post(URL, body)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
        });
    }

    removeWord(_id: string) {
        const URL = 'http://localhost:3000/word';
        return this.http.delete(`${URL}/${_id}`)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'REMOVE_WORD', _id });
        });
    }

    toggleWord(_id: string, isRemember) {
        const URL = 'http://localhost:3000/word';
        return this.http.put(`${URL}/${_id}`, { isRemember })
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'TOGGLE_WORD', _id });
        });
    }
}
