import { Component, Input,Output, EventEmitter  } from "@angular/core";

@Component ({
    selector: 'app-word-filter',
    templateUrl: './word-filter.component.html'
})

export class wordFilterComponent {
    @Input() filterStatus: string;
    @Output() onChangeFilterStatus = new EventEmitter();
    onChange(evt) {
        const newFilterStatus = evt.target.value;
        this.onChangeFilterStatus.emit(newFilterStatus);
    }

}