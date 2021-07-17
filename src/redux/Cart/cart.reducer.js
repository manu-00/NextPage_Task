let INITIAL_STATE=[]

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "ADD_COURSE":
            let {course}=action;
            if(state.length+1==4){
                alert("max 3 classes per week");
                return state
            }
            return [...state,course]
        case "REMOVE_COURSE":
            let {remove}=action;
            return state.filter(course=>course.id!==remove.id)
        default:
            return state;    
    }
}

export default cartReducer;