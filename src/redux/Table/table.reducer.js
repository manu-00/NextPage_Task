const INITIAL_STATE=[]

const tableReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "GET_SUCCESS":
           let {courses}=action;
           return courses
        default:
            return state;    
    }
}

export default tableReducer;