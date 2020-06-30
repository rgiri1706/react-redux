const intitialState={
    age: 21,
    a:1
};

const myReducerA=(state = intitialState, action)=>{
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
            a:state.a+action.b
       };
    }
    return newState;
}

export default myReducerA;