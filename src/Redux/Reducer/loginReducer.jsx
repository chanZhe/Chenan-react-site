const defaultLogin = {type:'login',loginStatus:false}

const loginReducer = (state = defaultLogin,action) =>{
    switch (action.type){
        case 'login':
        const newVal = Object.assign({},state,action);
        return newVal;
        default:
        return state;
    }
}
export default loginReducer