const Increase = 'increase'

const add = () =>{
   return {type:'increase'}
}

export const addIfOdd = ()=>(dispatch,getState) =>{
    const currentVal = getState();
    if(currentVal % 2 == 0){
        dispatch(add())
        console.log('this is odd')
        return false;
    }
    dispatch(add())
}
