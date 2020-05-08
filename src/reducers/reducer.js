import { OPEN_IDEA_EDITOR, CLOSE_IDEA_EDITOR, ADD_IDEA } from './../actions/ideas';

export default (state, action) => {

    switch (action.type){
        case OPEN_IDEA_EDITOR:
        return {
            ...state,
            editorOpen: true
        }

        case CLOSE_IDEA_EDITOR:
            return {
                ...state,
                editorOpen: false
            }
        case ADD_IDEA:
            return {
                ...state, ideas:[...state.ideas, action.payload.idea], editorOpen: false
            }

        default:
            return state
    }
}