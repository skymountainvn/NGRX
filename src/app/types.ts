export interface Word {
    en: string;
    vn: string;
    _id: string;
    isRemember : boolean;
}

export interface AppState {
    words: Word[];
    shoudShowForm: boolean;
    filterStatus: string;
}