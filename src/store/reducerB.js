const intitialState={
    age: 21,
    b:1
};

const myReducerB=(state = intitialState, action)=>{
    const newState = {...state};
    if(action.type === 'AGE_UP')
    {
        newState.age++;
    }
    if(action.type === 'AGE_DOWN')
    {
        newState.age--;
    }
    if(action.type === 'UPDATE_B')
    {
       return {
            ...state,
            b: action.a+state.b
       };
    }
    return newState;
}

export default myReducerB;