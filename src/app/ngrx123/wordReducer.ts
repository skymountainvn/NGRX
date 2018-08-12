import { Word } from '../types';
const defaultWords : Word[] =   [
    {en:'ONE', vn:"MOT", isRemember: true, _id:'a1'},
    {en:'TWO', vn:"HAI", isRemember: false, _id:'a2'},
    {en:'THREE', vn:"BA", isRemember: true, _id:'a3'},
    {en:'FOUR', vn:"BON", isRemember: false, _id:'a4'},
    {en:'FIVE', vn:"NAM", isRemember: true, _id:'a5'}
];
export function wordReducer(state = defaultWords, action): Word[] {
    if (action.type == "ADD_WORD") return state.concat(action.word);
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isRemember: !w.isRemember };
    });
    return state;
}