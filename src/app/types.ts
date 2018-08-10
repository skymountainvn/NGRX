export interface Word {
    en: string;
    vn: string;
    _id: string;
    isRemember : boolean;
}

export interface Appstate {
    words: Word[];
    shoudShowForm: boolean;
}