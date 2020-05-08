export const ADD_IDEA = "ADD_IDEA";
export const REMOVE_IDEA = "REMOVE_IDEA";
export const OPEN_IDEA_EDITOR = "OPEN_IDEA_EDITOR";
export const CLOSE_IDEA_EDITOR = "CLOSE_IDEA_EDITOR";




export function addIdea(idea){
    console.log("IDEA:",idea);
    
    return {
        type: ADD_IDEA,
        payload:{ idea }
    }
}

export function removeIdea(idea){
    return {
        type:REMOVE_IDEA,
        payload:idea
    }
}

export function openIdeaEditor(idea){
    return {
        type:OPEN_IDEA_EDITOR,
        payload:idea
    }
}

export function closeIdeaEditor(){
    return {
        type:CLOSE_IDEA_EDITOR,
    }
}



