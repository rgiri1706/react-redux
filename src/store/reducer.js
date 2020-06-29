const intitialState={
    age: 21
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
    return newState;
}

export default myReducer;