export function todoReducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), Text: action.payload, completed: false }];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}
