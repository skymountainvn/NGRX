import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from "../../types";
import { Observable } from "../../../../node_modules/rxjs";
@Component ({
    selector: 'app-word-filter',
    templateUrl: './word-filter.component.html'
})

export class wordFilterComponent {
    filterStatus: Observable<string>;
    constructor(private store: Store<AppState>) {
        this.filterStatus = this.store.select('filterStatus');
    }

    onChange(evt) {
        this.store.dispatch({
            type: 'SET_FILTER_STATUS',
            filterStatus: evt.target.value
        });
    }
}