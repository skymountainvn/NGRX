export function shouldShowFormReducer (state = false, action) {
    if(action.type === 'SHOW_FORM') RETURN true;
    if(action.type === 'HIDE_FORM') RETURN fase;
    return state;
}