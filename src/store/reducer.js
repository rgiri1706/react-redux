const intitialState={
    age: 21,
    a:1,
    b:1
};

const myReducer=(state = intitialState, action)=>{
    const newState = {...state};
    if(action.type === 'AGE_UP')
    {
        newState.age++;
    }
    if(action.type === 'AGE_DOWN')
    {
        newState.age--;
    }
    if(action.type === 'UPDATE_A')
    {
       return {
            ...state,
            a:state.a+state.b
       };
    }
    if(action.type === 'UPDATE_B')
    {
       return {
            ...state,
            b:state.a+state.b
       };
    }
    return newState;
}

export default myReducer;