
import { Word } from '../types';

// const defaultWords: Word[] = [
//     { en: 'One', vn: 'Mot', isRemember: true, _id: 'abcd1' },
//     { en: 'Two', vn: 'Hai', isRemember: false, _id: 'abcd2' },
//     { en: 'Three', vn: 'Ba', isRemember: false, _id: 'abcd3' },
//     { en: 'Four', vn: 'Bon', isRemember: true, _id: 'abcd4' }
// ]

export function wordReducer(state = [], action): Word[] {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isRemember: !w.isRemember };
    });
    return state;
}